import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import BackButton from '../components/BackButton';

import * as onboardingStoreModule from '../../onboardingStore';
import { submitOnboarding } from '../../submitOnboarding';
const onboardingStore = onboardingStoreModule && onboardingStoreModule.default ? onboardingStoreModule.default : onboardingStoreModule;

export default function SignUpCredentials({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleNext() {
    setError(null);
    if (!username || username.length < 3) return setError('Username must be at least 3 characters');
    if (!password || password.length < 6) return setError('Password must be at least 6 characters');

    if (onboardingStore && typeof onboardingStore.setOnboarding === 'function') {
      onboardingStore.setOnboarding({ username, password });
      console.log('onboarding: credentials stored', { username });
    }

    // persist onboarding locally (username/password saved in onboardingStore already)
    try {
      await submitOnboarding();
      console.log('local: profile saved for', username);
    } catch (e) {
      console.warn('Failed to save local profile', e);
      return setError((e && e.message) || String(e));
    }

    // navigate to the account type screen (host vs traveler)
    navigation.navigate('WhatTypeOfAccount');
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <BackButton navigation={navigation} style={{ marginTop: 25, marginBottom: 24, marginLeft: 13, padding: 5 }} />

        <Text
          style={{
            color: '#2551A1',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 29,
            marginLeft: 35,
            width: 270,
          }}
        >
          Create account
        </Text>

        <Text style={{ marginBottom: 6, color: '#2C2C2C' }}>Username</Text>
        <TextInput value={username} onChangeText={setUsername} autoCapitalize='none' placeholder='Your username' style={{ borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, marginBottom: 16 }} />

        <Text style={{ marginBottom: 6, color: '#2C2C2C' }}>Password</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry placeholder='Choose a password' style={{ borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, marginBottom: 8 }} />

        {error ? <Text style={{ color: 'red', marginBottom: 8 }}>{error}</Text> : null}

        <TouchableOpacity onPress={handleNext} style={{ backgroundColor: '#2551A1', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 8 }}>
          <Text style={{ color: '#fff' }}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
