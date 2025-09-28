import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import * as onboardingStoreModule from '../../onboardingStore';
const onboardingStore = onboardingStoreModule && onboardingStoreModule.default ? onboardingStoreModule.default : onboardingStoreModule;

export default function SignUpCredentials({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function handleNext() {
    setError(null);
    if (!username || username.length < 3) return setError('Username must be at least 3 characters');
    if (!password || password.length < 6) return setError('Password must be at least 6 characters');

    if (onboardingStore && typeof onboardingStore.setOnboarding === 'function') {
      onboardingStore.setOnboarding({ username, password });
      console.log('onboarding: credentials stored', { username });
    }

    // navigate to the account type screen (host vs traveler)
    navigation.navigate('WhatTypeOfAccount');
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 22, color: '#2551A1', fontWeight: 'bold', marginBottom: 20 }}>Create account</Text>

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
