import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";

export default function WhatSYourCountry({ navigation }) {
	const [selectedCountry, setSelectedCountry] = useState('');
	const [showDropdown, setShowDropdown] = useState(false);

	const countries = [
		'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 
		'Italy', 'Spain', 'Australia', 'Japan', 'South Korea', 
		'Brazil', 'Mexico', 'India', 'China', 'Other'
	];

	const handleNext = () => {
		if (selectedCountry) {
			navigation.navigate('WhichCountriesWouldYouLikeToVisit');
		}
	};

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
				<TouchableOpacity 
					onPress={() => navigation.goBack()}
					style={{
						marginTop: 25,
						marginBottom: 24,
						marginLeft: 13,
						padding: 5,
					}}
				>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/8qzvend7_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 15,
							height: 15,
						}}
					/>
				</TouchableOpacity>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 46,
					}}>
					<Text 
						style={{
							color: "#2551A1",
							fontSize: 20,
							fontWeight: "bold",
						}}>
						{"Where are you from?"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#2C2C2C",
						fontSize: 12,
						marginBottom: 8,
						marginLeft: 15,
					}}>
					{"Select Country"}
				</Text>
				<TouchableOpacity 
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						height: 45,
						backgroundColor: "#FFFFFF",
						borderColor: selectedCountry ? "#2551A1" : "#868686",
						borderRadius: 15,
						borderWidth: 1,
						paddingHorizontal: 15,
						marginBottom: showDropdown ? 10 : 286,
						marginHorizontal: 15,
					}}
					onPress={() => setShowDropdown(!showDropdown)}
				>
					<Text style={{
						color: selectedCountry ? "#2551A1" : "#B7B7B7",
						fontSize: 14,
					}}>
						{selectedCountry || "Choose your country"}
					</Text>
					<Text style={{
						color: "#868686",
						fontSize: 16,
						fontWeight: "bold"
					}}>
						{showDropdown ? "▲" : "▼"}
					</Text>
				</TouchableOpacity>

				{showDropdown && (
					<View style={{
						backgroundColor: "#FFFFFF",
						borderColor: "#868686",
						borderRadius: 15,
						borderWidth: 1,
						marginBottom: 20,
						marginHorizontal: 15,
						maxHeight: 200,
					}}>
						<ScrollView style={{ maxHeight: 200 }}>
							{countries.map((country, index) => (
								<TouchableOpacity
									key={index}
									style={{
										paddingVertical: 12,
										paddingHorizontal: 15,
										borderBottomWidth: index < countries.length - 1 ? 0.5 : 0,
										borderBottomColor: "#E0E0E0"
									}}
									onPress={() => {
										setSelectedCountry(country);
										setShowDropdown(false);
									}}
								>
									<Text style={{
										color: selectedCountry === country ? "#2551A1" : "#2C2C2C",
										fontSize: 14,
										fontWeight: selectedCountry === country ? "600" : "normal"
									}}>
										{country}
									</Text>
								</TouchableOpacity>
							))}
						</ScrollView>
					</View>
				)}

				<View 
					style={{
						width: 360,
						backgroundColor: "#FFFFFF",
						paddingTop: 3,
						paddingBottom: 28,
						marginTop: showDropdown ? 50 : 0,
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
							backgroundColor: selectedCountry ? "#2551A1" : "#B7B7B7",
							borderRadius: 100,
							paddingVertical: 14,
							marginHorizontal: 15,
						}} 
						onPress={handleNext}
						disabled={!selectedCountry}
					>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								fontWeight: "600",
							}}>
							{"Next"}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}