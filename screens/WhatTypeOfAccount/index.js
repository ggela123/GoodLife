// screens/WhatTypeOfAccount/index.js
import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import * as onboardingStoreModule from "../../onboardingStore"; // project root -> ../../

// normalize possible default wrapper (ESM/CJS interop)
const onboardingStore = (onboardingStoreModule && onboardingStoreModule.default && Object.keys(onboardingStoreModule).length === 1)
  ? onboardingStoreModule.default
  : onboardingStoreModule;

export default function WhatTypeOfAccount({ navigation }) {
  const [selectedType, setSelectedType] = useState(null); // 'host' | 'traveler'

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: 25, marginBottom: 24, marginLeft: 13, padding: 5 }}
        >
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/9c72p067_expires_30_days.png" }}
            resizeMode="stretch"
            style={{ width: 15, height: 15 }}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: "#2551A1",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 29,
            marginLeft: 35,
            width: 270,
          }}
        >
          What type of account are you creating?
        </Text>

        {/* Host */}
        <TouchableOpacity
          style={{
            width: 334,
            alignItems: "center",
            backgroundColor: selectedType === "host" ? "#2551A1" : "#FFFFFF",
            borderColor: selectedType === "host" ? "#2551A1" : "#2C2C2C",
            borderRadius: 100,
            borderWidth: 1,
            paddingVertical: 14,
            marginBottom: 20,
            marginHorizontal: 13,
          }}
          onPress={() => {
            setSelectedType("host");
          }}
        >
          <Text style={{ color: selectedType === "host" ? "#FFFFFF" : "#2C2C2C", fontSize: 14 }}>
            Host
          </Text>
        </TouchableOpacity>

        {/* Traveler */}
        <TouchableOpacity
          style={{
            width: 334,
            alignItems: "center",
            backgroundColor: selectedType === "traveler" ? "#2551A1" : "#FFFFFF",
            borderColor: selectedType === "traveler" ? "#2551A1" : "#2C2C2C",
            borderRadius: 100,
            borderWidth: 1,
            paddingVertical: 14,
            marginBottom: 386,
            marginHorizontal: 13,
          }}
          onPress={() => {
            setSelectedType("traveler");
          }}
        >
          <Text style={{ color: selectedType === "traveler" ? "#FFFFFF" : "#2C2C2C", fontSize: 14 }}>
            Traveler
          </Text>
        </TouchableOpacity>

        <View style={{ width: 360, backgroundColor: "#FFFFFF", paddingTop: 3, paddingBottom: 28 }}>
          <View style={{ height: 1, backgroundColor: "#868686", marginBottom: 23, marginHorizontal: 15 }} />
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: selectedType ? "#2551A1" : "#B7B7B7",
              borderRadius: 100,
              paddingVertical: 14,
              marginHorizontal: 15,
            }}
            onPress={() => {
              if (!selectedType) return;
              try {
                if (onboardingStore && typeof onboardingStore.setOnboarding === 'function') {
                  onboardingStore.setOnboarding({ account_type: selectedType });
                  console.log(`onboarding: account_type stored -> ${selectedType}`);
                  if (typeof onboardingStore.getOnboarding === 'function') {
                    console.log('onboarding state ->', onboardingStore.getOnboarding());
                  }
                } else {
                  console.warn('onboardingStore.setOnboarding is not available', onboardingStore);
                }
              } catch (e) {
                console.warn('failed to set onboarding', e);
              }
              navigation.navigate("WhatSYourFullName");
            }}
            disabled={!selectedType}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 14 }}>Next</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: 360, height: 145, paddingBottom: 45 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
