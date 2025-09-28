import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity } from "react-native";
import BackButton from '../components/BackButton';
import * as onboardingStoreModule from '../../onboardingStore';

const onboardingStore = onboardingStoreModule && onboardingStoreModule.default ? onboardingStoreModule.default : onboardingStoreModule;

const OPTIONS = [
	{ id: 1, label: 'NGO' },
	{ id: 2, label: 'Community' },
	{ id: 3, label: 'Non-Profit School' },
	{ id: 4, label: 'Homestay' },
	{ id: 5, label: 'Hostel' },
	{ id: 6, label: 'Camping' },
	{ id: 7, label: 'Farm' },
	{ id: 8, label: 'Permaculture project' },
	{ id: 9, label: 'Eco Village' },
	{ id: 10, label: 'Holistic Center' },
	{ id: 11, label: 'Guest House' },
	{ id: 12, label: 'Eco Lodge' },
];

export default ({ navigation }) => {
	const [selected, setSelected] = useState([]);
	const [error, setError] = useState(null);

	function toggle(id) {
		setError(null);
		const already = selected.includes(id);
		if (already) {
			setSelected(selected.filter(s => s !== id));
			return;
		}
		if (selected.length >= 3) {
			setError('You can select up to 3 options');
			return;
		}
		setSelected([...selected, id]);
	}

	function handleNext() {
		try {
			if (onboardingStore && typeof onboardingStore.setOnboarding === 'function') {
				onboardingStore.setOnboarding({ opportunity_ids: selected });
				console.log('onboarding: opportunity_ids stored ->', selected);
			}
		} catch (e) {
			console.warn('failed to save opportunities', e);
		}
		navigation.navigate('Home');
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
				<BackButton navigation={navigation} />
				<View
					style={{
						alignItems: "center",
						marginBottom: 16,
					}}>
					<Text
						style={{
							color: "#2551A1",
							fontSize: 20,
							fontWeight: "bold",
							textAlign: "center",
							width: 247,
						}}>
						{"What opportunities are you looking for?"}
					</Text>
				</View>

				<Text
					style={{
						color: "#626365",
						fontSize: 15,
						marginBottom: 5,
						marginLeft: 16,
					}}>
					{"Select up to 3"}
				</Text>
				<View
					style={{
						height: 1,
						backgroundColor: "#868686",
						marginBottom: 12,
						marginHorizontal: 16,
					}}>
				</View>

				<View style={{ paddingHorizontal: 12 }}>
					{OPTIONS.map(opt => {
						const isSelected = selected.includes(opt.id);
						return (
							<TouchableOpacity
								key={opt.id}
								onPress={() => toggle(opt.id)}
								style={{
									alignItems: 'center',
									backgroundColor: isSelected ? '#2551A1' : '#FFFFFF',
									borderColor: isSelected ? '#2551A1' : '#2C2C2C',
									borderRadius: 100,
									borderWidth: 1,
									paddingVertical: 14,
									marginBottom: 12,
									marginHorizontal: 13,
								}}
							>
								<Text style={{ color: isSelected ? '#FFFFFF' : '#2C2C2C', fontSize: 14 }}>{opt.label}</Text>
							</TouchableOpacity>
						);
					})}

					{error ? <Text style={{ color: 'red', marginLeft: 16, marginBottom: 12 }}>{error}</Text> : null}

					<View style={{ paddingBottom: 45 }}>
						<View style={{ backgroundColor: '#FFFFFF', paddingTop: 3, paddingBottom: 28 }}>
							<View style={{ height: 1, backgroundColor: '#868686', marginBottom: 23, marginHorizontal: 15 }} />
							<TouchableOpacity
								style={{ alignItems: 'center', backgroundColor: selected && selected.length ? '#2551A1' : '#B7B7B7', borderRadius: 100, paddingVertical: 14, marginHorizontal: 15 }}
								disabled={!(selected && selected.length)}
								onPress={() => { if (!(selected && selected.length)) return; handleNext(); }}
							>
								<Text style={{ color: '#FFFFFF', fontSize: 14 }}>{'Next'}</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}