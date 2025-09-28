import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity } from "react-native";

// defensive import for onboardingStore
import * as onboardingStoreModule from '../../onboardingStore';
const onboardingStore = onboardingStoreModule && onboardingStoreModule.default ? onboardingStoreModule.default : onboardingStoreModule;

const CONTINENTS = [
	{ id: 1, name: 'Europe' },
	{ id: 2, name: 'Asia' },
	{ id: 3, name: 'North America' },
	{ id: 4, name: 'South America' },
	{ id: 5, name: 'Oceania' },
	{ id: 6, name: 'Africa' },
];

export default ({ navigation }) => {
		const [selectedId, setSelectedId] = useState(null);

		function toggleSelect(id) {
			setSelectedId(prev => (prev === id ? null : id));
		}

	function handleNext() {
		const payload = { continent_ids: selectedId ? [selectedId] : [] };
		if (onboardingStore && typeof onboardingStore.setOnboarding === 'function') {
			onboardingStore.setOnboarding(payload);
			console.log('onboarding: continent_ids stored ->', payload);
			console.log('onboarding state ->', onboardingStore.getOnboarding ? onboardingStore.getOnboarding() : onboardingStore);
		} else {
			console.warn('onboardingStore not available', Object.keys(onboardingStore || {}));
		}
		navigation.navigate('WhichCountriesWouldYouLikeToVisit');
	}

	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
				}}>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/4ufnovtr_expires_30_days.png"}} 
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
						marginBottom: 29,
					}}>
					<Text 
						style={{
							color: "#2551A1",
							fontSize: 20,
							fontWeight: "bold",
							textAlign: "center",
							width: 229,
						}}>
						{"Where would you like to travel to?"}
					</Text>
				</View>

						{CONTINENTS.map(cont => {
							const isSelected = selectedId === cont.id;
					return (
						<TouchableOpacity 
							key={cont.id}
							style={{
								alignItems: "center",
								backgroundColor: isSelected ? '#eef6ff' : '#FFFFFF',
								borderColor: isSelected ? '#2551A1' : '#2C2C2C',
								borderRadius: 100,
								borderWidth: 1,
								paddingVertical: 14,
								marginBottom: 20,
								marginHorizontal: 13,
							}} onPress={() => toggleSelect(cont.id)}>
							<Text 
								style={{
									color: isSelected ? '#2551A1' : '#2C2C2C',
									fontSize: 14,
								}}>
								{cont.name}
							</Text>
						</TouchableOpacity>
					)
				})}

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
							}} onPress={handleNext}>
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
		</SafeAreaView>
	)
}