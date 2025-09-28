// Quick standalone Supabase connectivity check (Node.js)
// Usage (bash):
// EXPO_PUBLIC_SUPABASE_URL="https://..." EXPO_PUBLIC_SUPABASE_ANON_KEY="..." node test-supabase-node.js

const { createClient } = require('@supabase/supabase-js');

const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const key = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Missing EXPO_PUBLIC_SUPABASE_URL or EXPO_PUBLIC_SUPABASE_ANON_KEY in env');
  process.exit(2);
}

async function run() {
  try {
    const supabase = createClient(url, key, {});
    const { data, error, status } = await supabase.from('countries').select('code,name').limit(5);
    if (error) {
      console.error('Supabase error', status, error.message || error);
      process.exit(1);
    }
    console.log('OK - rows:', data.length);
    console.log(data);
  } catch (e) {
    console.error('Unexpected error', e && e.message ? e.message : e);
    process.exit(3);
  }
}

run();
