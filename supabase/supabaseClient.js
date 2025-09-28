import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

const extra =
  Constants.expoConfig?.extra ??
  Constants.manifestExtra ??
  Constants.manifest?.extra ??
  {};

const SUPABASE_URL =
  extra?.EXPO_PUBLIC_SUPABASE_URL ??
  process.env.EXPO_PUBLIC_SUPABASE_URL ??
  process.env.SUPABASE_URL ??
  process.env.REACT_APP_SUPABASE_URL ??
  process.env.VITE_SUPABASE_URL ??
  null;

const SUPABASE_ANON_KEY =
  extra?.EXPO_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.SUPABASE_ANON_KEY ??
  process.env.REACT_APP_SUPABASE_ANON_KEY ??
  process.env.VITE_SUPABASE_ANON_KEY ??
  null;

function maskKey(k) {
  try {
    if (!k || k.length < 12) return '***';
    return k.slice(0, 4) + '...' + k.slice(-4);
  } catch (e) { return '***'; }
}

function decodeJwtPayload(jwt) {
  try {
    const parts = jwt.split('.');
    if (parts.length < 2) return null;
    const payload = parts[1];
    const json = Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8');
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

// non-sensitive diagnostic to help debug env mismatches in Expo vs Node
try {
  const srcs = [];
  if (extra && Object.keys(extra).length) srcs.push('expo.extra');
  if (process.env.EXPO_PUBLIC_SUPABASE_URL) srcs.push('process.env.EXPO_PUBLIC_SUPABASE_URL');
  if (process.env.SUPABASE_URL) srcs.push('process.env.SUPABASE_URL');
  if (process.env.REACT_APP_SUPABASE_URL) srcs.push('process.env.REACT_APP_SUPABASE_URL');
  if (process.env.VITE_SUPABASE_URL) srcs.push('process.env.VITE_SUPABASE_URL');
  const payload = decodeJwtPayload(SUPABASE_ANON_KEY || '');
  console.log('[supabaseClient] SUPABASE_URL=', SUPABASE_URL ? SUPABASE_URL.replace(/:\/\/([^/]+).*/, '://$1') : SUPABASE_URL, ' availableFrom=', srcs.join('|') || 'none');
  console.log('[supabaseClient] SUPABASE_ANON_KEY=', maskKey(SUPABASE_ANON_KEY), ' jwt.ref=', payload?.ref ?? null);
} catch (e) {
  // ignore diagnostics failures
}

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.log('Expo extra ->', extra); // debug once if needed
  throw new Error('Missing EXPO_PUBLIC_SUPABASE_URL or EXPO_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;
