import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity } from "react-native";
import BackButton from '../components/BackButton';
import * as onboardingStoreModule from '../../onboardingStore';

// normalize possible default wrapper (ESM/CJS interop)
const onboardingStore = (onboardingStoreModule && onboardingStoreModule.default && Object.keys(onboardingStoreModule).length === 1)
	? onboardingStoreModule.default
	: onboardingStoreModule;

export default ({ navigation }) => {
	const [selected, setSelected] = useState(null); // 'male' | 'female' | 'other'

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
			<ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
				<BackButton navigation={navigation} />

				<View style={{ alignItems: "center", marginBottom: 52 }}>
					<Text style={{ color: "#2551A1", fontSize: 20, fontWeight: "bold" }}>{"What’s your gender?"}</Text>
				</View>

				{/** Male */}
				<TouchableOpacity
					style={{
						alignItems: "center",
						backgroundColor: selected === 'male' ? '#2551A1' : '#FFFFFF',
						borderColor: selected === 'male' ? '#2551A1' : '#2C2C2C',
						borderRadius: 100,
						borderWidth: 1,
						paddingVertical: 14,
						marginBottom: 20,
						marginHorizontal: 13,
					}}
					onPress={() => setSelected('male')}
				>
					<Text style={{ color: selected === 'male' ? '#FFFFFF' : '#2C2C2C', fontSize: 14 }}>{"Male"}</Text>
				</TouchableOpacity>

				{/** Female */}
				<TouchableOpacity
					style={{
						alignItems: 'center',
						backgroundColor: selected === 'female' ? '#2551A1' : '#FFFFFF',
						borderColor: selected === 'female' ? '#2551A1' : '#2C2C2C',
						borderRadius: 100,
						borderWidth: 1,
						paddingVertical: 14,
						marginBottom: 20,
						marginHorizontal: 13,
					}}
					onPress={() => setSelected('female')}
				>
					<Text style={{ color: selected === 'female' ? '#FFFFFF' : '#2C2C2C', fontSize: 14 }}>{"Female"}</Text>
				</TouchableOpacity>

				{/** Other */}
				<TouchableOpacity
					style={{
						alignItems: 'center',
						backgroundColor: selected === 'other' ? '#2551A1' : '#FFFFFF',
						borderColor: selected === 'other' ? '#2551A1' : '#2C2C2C',
						borderRadius: 100,
						borderWidth: 1,
						paddingVertical: 14,
						marginBottom: 321,
						marginHorizontal: 13,
					}}
					onPress={() => setSelected('other')}
				>
					<Text style={{ color: selected === 'other' ? '#FFFFFF' : '#2C2C2C', fontSize: 14 }}>{"Other"}</Text>
				</TouchableOpacity>

				<View style={{ paddingBottom: 45 }}>
					<View style={{ backgroundColor: '#FFFFFF', paddingTop: 3, paddingBottom: 28 }}>
						<View style={{ height: 1, backgroundColor: '#868686', marginBottom: 23, marginHorizontal: 15 }} />
						<TouchableOpacity
							style={{ alignItems: 'center', backgroundColor: selected ? '#2551A1' : '#B7B7B7', borderRadius: 100, paddingVertical: 14, marginHorizontal: 15 }}
							disabled={!selected}
							onPress={() => {
								if (!selected) return; // guard, though button is disabled when no selection
								try {
									if (onboardingStore && typeof onboardingStore.setOnboarding === 'function') {
										onboardingStore.setOnboarding({ gender: selected });
										console.log('onboarding: gender stored ->', selected);
										if (typeof onboardingStore.getOnboarding === 'function') console.log('onboarding state ->', onboardingStore.getOnboarding());
									} else {
										console.warn('onboardingStore.setOnboarding is not available', onboardingStore);
									}
								} catch (e) {
									console.warn('failed to set onboarding gender', e);
								}
								navigation.navigate('WhatSYourCountry');
							}}
						>
							<Text style={{ color: '#FFFFFF', fontSize: 14 }}>{'Next'}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};