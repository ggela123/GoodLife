import os
import asyncio
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from supabase import create_client, Client

import pycountry

# --- Google ADK / GenAI bits (from your teammate's code) ---
from google.adk.agents import Agent
from google.adk.models.lite_llm import LiteLlm  # not used directly but keeps deps aligned
from google.adk.sessions import InMemorySessionService
from google.adk.runners import Runner
from google.genai import types

MODEL_GEMINI_2_0_FLASH = "gemini-2.0-flash"  # keep same model

# ---- Env / clients ----
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.environ.get("SUPABASE_SERVICE_KEY") or os.environ.get("SUPABASE_KEY")
GOOGLE_API_KEY = os.environ.get("GOOGLE_API_KEY")  # required by google-genai / ADK under the hood

if not SUPABASE_URL or not SUPABASE_SERVICE_KEY:
    raise RuntimeError("Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in environment.")
if not GOOGLE_API_KEY:
    raise RuntimeError("Missing GOOGLE_API_KEY in environment.")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

def country_to_iso(country_name: str) -> Optional[str]:
    try:
        return pycountry.countries.lookup(country_name).alpha_2
    except Exception:
        return None

# ---- Tool callable by the agent ----
def get_place_info(place: str) -> dict:
    """
    Tool: returns organizations for a given place (country name).
    Uses your Supabase 'organizations' table, filtering by ISO-2 country_code.
    """
    print(f"--- Tool:get_place_info -> {place} ---")
    country_code = country_to_iso(place)
    if not country_code:
        return {"status": "error", "error_message": f"Invalid country name '{place}'."}

    try:
        response = (
            supabase.table("organizations")
            .select("*")
            .eq("country_code", country_code)
            .execute()
        )
        rows = response.data or []
        if not rows:
            return {"status": "error", "error_message": f"No data found for '{place}'."}

        # Return both a human string + structured rows the UI could use later
        reports = []
        for entry in rows:
            org_name = entry.get("name", "Unknown")
            mission = entry.get("mission", "No description")
            city = entry.get("city") or ""
            cc = entry.get("country_code") or ""
            reports.append(f"{org_name} ({city}, {cc}): {mission}")

        return {
            "status": "success",
            "report": " | ".join(reports),
            "items": rows,
        }
    except Exception as e:
        print("Error in get_place_info:", e)
        return {"status": "error", "error_message": "Server error fetching data."}

# ---- Root agent (your teammate's config, kept intact) ----
root_agent = Agent(
    name="good_life_top_agent",
    model=MODEL_GEMINI_2_0_FLASH,
    description="Provide or help the user with any request for a place to travel to",
    instruction=(
        "The main purpose of this app is for users to travel and volunteer in a foreign country. "
        "You are a helpful travel assistant who will help the user find the perfect place. "
        "The user will have already selected some countries or continents of preference. "
        "If the user has not selected a preferred location, ask politely. "
        "You can inform the users of what opportunities, organizations, and programs are available. "
        "Use the 'get_place_info' tool when the user asks about a specific place. "
        "If the tool returns an error, explain politely (do not mention tools). "
        "If the tool is successful, present the report clearly."
    ),
    tools=[get_place_info],
)

# ---- Session / Runner ----
session_service = InMemorySessionService()
APP_NAME = "good_life_app"
DEFAULT_USER_ID = "demo_user"
DEFAULT_SESSION_ID = "demo_session"

_runner: Optional[Runner] = None

async def build_runner():
    global _runner
    # Ensure a session exists
    await session_service.create_session(
        app_name=APP_NAME,
        user_id=DEFAULT_USER_ID,
        session_id=DEFAULT_SESSION_ID,
    )
    _runner = Runner(agent=root_agent, app_name=APP_NAME, session_service=session_service)
    print("Runner ready:", _runner.agent.name)

async def run_once(prompt: str, user_id: str, session_id: str) -> str:
    """Drive the ADK runner once and return final text."""
    content = types.Content(role="user", parts=[types.Part(text=prompt)])
    final_text = "No response."
    async for event in _runner.run_async(user_id=user_id, session_id=session_id, new_message=content):
        if event.is_final_response():
            if event.content and event.content.parts:
                final_text = event.content.parts[0].text
            elif event.actions and event.actions.escalate:
                final_text = f"Agent escalation: {event.error_message or 'No message.'}"
            break
    return final_text

# ---- FastAPI app ----
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten in prod
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatBody(BaseModel):
    prompt: str
    userId: Optional[str] = None
    sessionId: Optional[str] = None

@app.on_event("startup")
async def _startup():
    await build_runner()

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/chat")
async def chat(body: ChatBody):
    if not body.prompt or not body.prompt.strip():
        raise HTTPException(400, "prompt is required")
    if _runner is None:
        raise HTTPException(503, "Runner not ready")

    user = body.userId or DEFAULT_USER_ID
    sess = body.sessionId or DEFAULT_SESSION_ID
    try:
        text = await run_once(body.prompt.strip(), user, sess)
        return {"reply": text}
    except Exception as e:
        print("chat error:", e)
        raise HTTPException(500, str(e))
