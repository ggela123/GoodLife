import React, { useRef, useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, } from "react-native";
import * as onboardingStoreModule from '../../onboardingStore';

// normalize possible default wrapper (ESM/CJS interop)
const onboardingStore = (onboardingStoreModule && onboardingStoreModule.default && Object.keys(onboardingStoreModule).length === 1)
	? onboardingStoreModule.default
	: onboardingStoreModule;

export default ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const lastNameRef = useRef(null);
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
				<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
					<ScrollView
						keyboardShouldPersistTaps="handled"
						contentContainerStyle={{ flexGrow: 1 }}
						style={{
							flex: 1,
							backgroundColor: "#FFFFFF",
						}}
					>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/yjevqwwn_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						width: 15,
						height: 15,
						marginTop: 25,
						marginBottom: 24,
						marginLeft: 13,
					}}
				/>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 32,
					}}>
					<Text 
						style={{
							color: "#2551A1",
							fontSize: 20,
							fontWeight: "bold",
						}}>
						{"What’s your full name?"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#2C2C2C",
						fontSize: 12,
						marginBottom: 8,
						marginLeft: 15,
					}}>
					{"First Name"}
				</Text>
				<TextInput
					value={firstName}
					onChangeText={setFirstName}
					placeholder="First name"
					placeholderTextColor="#B7B7B7"
					returnKeyType="next"
					onSubmitEditing={() => lastNameRef.current && lastNameRef.current.focus()}
					blurOnSubmit={false}
					style={{
						height: 45,
						backgroundColor: "#FFFFFF",
						borderColor: "#868686",
						borderRadius: 15,
						borderWidth: 1,
						marginBottom: 28,
						marginHorizontal: 15,
						paddingHorizontal: 12,
						fontSize: 14,
					}}
				/>
				<Text 
					style={{
						color: "#2C2C2C",
						fontSize: 12,
						marginBottom: 8,
						marginLeft: 15,
					}}>
					{"Last Name"}
				</Text>
				<TextInput
					ref={lastNameRef}
					value={lastName}
					onChangeText={setLastName}
					placeholder="Last name"
					placeholderTextColor="#B7B7B7"
					returnKeyType="done"
					style={{
						height: 45,
						backgroundColor: "#FFFFFF",
						borderColor: "#868686",
						borderRadius: 15,
						borderWidth: 1,
						marginBottom: 354,
						marginHorizontal: 15,
						paddingHorizontal: 12,
						fontSize: 14,
					}}
				/>
				<View 
					style={{
						paddingBottom: 45,
					}}>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							paddingTop: 3,
							paddingBottom: 28,
						}}>
						<View 
							style={{
								height: 1,
								backgroundColor: "#868686",
								marginBottom: 23,
								marginHorizontal: 15,
							}}>
						</View>
							<TouchableOpacity 
								style={{
									alignItems: "center",
									backgroundColor: "#2551A1",
									borderRadius: 100,
									paddingVertical: 14,
									marginHorizontal: 15,
								}} onPress={() => {
									try {
										if (onboardingStore && typeof onboardingStore.setOnboarding === 'function') {
											onboardingStore.setOnboarding({ first_name: firstName, last_name: lastName });
											console.log('onboarding: first_name/last_name stored ->', { first_name: firstName, last_name: lastName });
											if (typeof onboardingStore.getOnboarding === 'function') console.log('onboarding state ->', onboardingStore.getOnboarding());
										} else {
											console.warn('onboardingStore.setOnboarding is not available', onboardingStore);
										}
									} catch (e) {
										console.warn('failed to set onboarding names', e);
									}
									navigation.navigate('WhatSYourGender', { firstName, lastName });
								}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 14,
								}}>
								{"Next"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
		</SafeAreaView>
	)
}