// onboardingStore.js (at project root)

const initial = {
  account_type: null,          // 'host' | 'traveler'
  first_name: null,
  last_name: null,
  gender: null,                // 'male' | 'female' | 'other'
  origin_country_code: null,   // 'US', 'DE', ...
  visit_country_codes: [],     // ['ES','IT',...]
  continent_ids: [],           // [1,2,...]
  opportunity_ids: [],         // [1,3,...]
};

let state = { ...initial };

export function setOnboarding(partial) {
  state = { ...state, ...partial };
}

export function getOnboarding() {
  return state;
}

export function resetOnboarding() {
  state = { ...initial };
}

// ALSO provide a default export so either import style works
const onboardingStore = { setOnboarding, getOnboarding, resetOnboarding };
export default onboardingStore;

// Debug log to show module load (safe to leave in dev)
try { console.log('[onboardingStore] module loaded and exports:', Object.keys(onboardingStore)); } catch (e) {}
