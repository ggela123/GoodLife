import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './supabase/AuthProvider';

// Import your screens
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import WhatTypeOfAccount from './screens/WhatTypeOfAccount';
import WhatSYourFullName from './screens/WhatSYourFullName';
import WhatSYourGender from './screens/WhatSYourGender';
import WhatSYourCountry from './screens/WhatSYourCountry';
import WhichCountriesWouldYouLikeToVisit from './screens/WhichCountriesWouldYouLikeToVisit';
import WhereWouldYouLikeToTravelTo from './screens/WhereWouldYouLikeToTravelTo';
import WhatOpportunitiesAreYouLookingFor from './screens/WhatOpportunitiesAreYouLookingFor';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false, // Hide headers for a cleaner look
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="WhatTypeOfAccount" component={WhatTypeOfAccount} />
        <Stack.Screen name="WhatSYourFullName" component={WhatSYourFullName} />
        <Stack.Screen name="WhatSYourGender" component={WhatSYourGender} />
        <Stack.Screen name="WhatSYourCountry" component={WhatSYourCountry} />
        <Stack.Screen name="WhichCountriesWouldYouLikeToVisit" component={WhichCountriesWouldYouLikeToVisit} />
        <Stack.Screen name="WhereWouldYouLikeToTravelTo" component={WhereWouldYouLikeToTravelTo} />
        <Stack.Screen name="WhatOpportunitiesAreYouLookingFor" component={WhatOpportunitiesAreYouLookingFor} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}
