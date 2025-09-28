import localAuth from './localAuth';
import * as onboardingStoreModule from './onboardingStore';

const onboardingStore = onboardingStoreModule && onboardingStoreModule.default ? onboardingStoreModule.default : onboardingStoreModule;

export async function submitOnboarding() {
  const onboarding = onboardingStore.getOnboarding ? onboardingStore.getOnboarding() : onboardingStore;
  const { username, password, first_name, last_name, gender, origin_country_code, account_type } = onboarding || {};

  if (!username || !password) {
    throw new Error('username and password required to create account');
  }

  // Persist the profile locally (username is used as the primary key)
  const profile = {
    username,
    password, // stored locally for now; in production you'd hash this
    first_name: first_name || null,
    last_name: last_name || null,
    gender: gender || null,
    origin_country_code: origin_country_code || null,
    account_type: account_type || null,
    created_at: new Date().toISOString(),
  };

  try {
    const saved = await localAuth.saveLocalProfile(profile);
    return { success: true, profile: saved };
  } catch (e) {
    console.warn('submitOnboarding: failed to save locally', e);
    throw e;
  }
}
