import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'local_profiles_v1';

async function _readAllProfiles() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn('localAuth: failed to read profiles', e);
    return {};
  }
}

async function _writeAllProfiles(map) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    return true;
  } catch (e) {
    console.warn('localAuth: failed to write profiles', e);
    return false;
  }
}

/**
 * Save a profile locally. profile must include at least { username, password }
 * Other profile fields are stored as-is.
 */
export async function saveLocalProfile(profile) {
  if (!profile || !profile.username || !profile.password) {
    throw new Error('username and password required');
  }
  const map = await _readAllProfiles();
  // store by username (lowercase)
  const key = String(profile.username).trim().toLowerCase();
  map[key] = { ...profile, username: key };
  const ok = await _writeAllProfiles(map);
  if (!ok) throw new Error('failed to persist profile locally');
  return map[key];
}

/**
 * Get a local profile by username and password. Returns the profile or null.
 */
export async function getLocalProfile(username, password) {
  if (!username) return null;
  const map = await _readAllProfiles();
  const key = String(username).trim().toLowerCase();
  const profile = map[key];
  if (!profile) return null;
  // simple equality check; do not use in production. If you want hashing, add it here.
  if (profile.password === password) return profile;
  return null;
}

/**
 * Helper: get profile by username only (no password check)
 */
export async function getLocalProfileByUsername(username) {
  if (!username) return null;
  const map = await _readAllProfiles();
  return map[String(username).trim().toLowerCase()] || null;
}

export async function listLocalProfiles() {
  const map = await _readAllProfiles();
  return map;
}

export async function removeLocalProfile(username) {
  const map = await _readAllProfiles();
  const key = String(username).trim().toLowerCase();
  if (map[key]) {
    delete map[key];
    await _writeAllProfiles(map);
    return true;
  }
  return false;
}

export default {
  saveLocalProfile,
  getLocalProfile,
  getLocalProfileByUsername,
  listLocalProfiles,
  removeLocalProfile,
};
