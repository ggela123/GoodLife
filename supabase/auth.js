// src/services/auth.js
import { supabase } from './supabaseClient';

/** Sign in with email/password */
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data; // { user, session }
}

/** Sign up and immediately create the user's profile (email confirmation is disabled) */
export async function register({ email, password, profile = {} }) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  // Create the profiles row now; RLS requires id = auth.uid()
  const { data: userData, error: uErr } = await supabase.auth.getUser();
  if (uErr) throw uErr;
  const user = userData?.user;
  if (!user) throw new Error('No user after sign up');

  const row = {
    id: user.id,
    first_name: profile.first_name ?? null,
    last_name: profile.last_name ?? null,
    account_type: profile.account_type ?? null,          // 'host' | 'traveler'
    gender: profile.gender ?? null,                       // 'male' | 'female' | 'other'
    origin_country_code: profile.origin_country_code ?? null, // e.g. 'US'
  };

  const { error: pErr } = await supabase.from('profiles').upsert(row, { onConflict: 'id' });
  if (pErr) throw pErr;

  return data; // { user, session }
}

/** Sign out the current user */
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

/** Get the current session (or null) */
export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session ?? null;
}

/** Get the current user (or null) */
export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user ?? null;
}

/** Subscribe to auth changes; returns an unsubscribe fn */
export function onAuthChange(callback) {
  const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session);
  });
  return () => subscription?.unsubscribe();
}

/** Fetch the signed-in user's profile */
export async function fetchMyProfile() {
  const user = await getCurrentUser();
  if (!user) throw new Error('Not signed in');
  const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single();
  if (error) throw error;
  return data;
}

/** Update the signed-in user's profile (partial fields) */
export async function updateMyProfile(partial) {
  const user = await getCurrentUser();
  if (!user) throw new Error('Not signed in');

  const row = {
    id: user.id, // required by RLS (auth.uid() = id)
    first_name: partial.first_name ?? null,
    last_name: partial.last_name ?? null,
    account_type: partial.account_type ?? null,
    gender: partial.gender ?? null,
    origin_country_code: partial.origin_country_code ?? null,
  };

  const { data, error } = await supabase
    .from('profiles')
    .upsert(row, { onConflict: 'id' })
    .select()
    .single();

  if (error) throw error;
  return data;
}
