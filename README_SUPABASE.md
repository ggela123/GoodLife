Supabase backend wiring for GoodLife

Files added: `supabase/supabaseClient.js`, `supabase/auth.js`, `supabase/AuthProvider.js`

Quick setup
1. Copy `.env.example` to `.env` (do NOT commit `.env`)
2. Fill in SUPABASE_URL and SUPABASE_ANON_KEY
3. In development you can start Expo: `npm start`

How it works
- `supabase/supabaseClient.js` exports a single `supabase` client.
- `supabase/auth.js` contains helpers: `signInWithEmail`, `signUpWithEmail`, `signOut`, `upsertProfile`, `getProfile`.
- `supabase/AuthProvider.js` exposes `user` and `session` via React Context. Wrap your app with `<AuthProvider>` (already wired in `App.js`).

Next steps
- Add a `profiles` table in Supabase with `id uuid references auth.users(id)` and other columns used by the app.
- Implement signup flow by calling `upsertProfile` after successful `signUpWithEmail`.
- Use `useAuth()` (from `supabase/AuthProvider.js`) in screens to read `user` and `session`.
