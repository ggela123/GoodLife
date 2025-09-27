import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";

export default function WhatSYourGender({ navigation }) {
	const [selectedGender, setSelectedGender] = useState(null);

	const handleNext = () => {
		if (selectedGender) {
			navigation.navigate('WhatSYourCountry');
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
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/rtbasfeq_expires_30_days.png"}} 
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
						marginBottom: 52,
					}}>
					<Text 
						style={{
							color: "#2551A1",
							fontSize: 20,
							fontWeight: "bold",
						}}>
						{"What's your gender?"}
					</Text>
				</View>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: selectedGender === 'male' ? "#2551A1" : "#FFFFFF",
						borderColor: selectedGender === 'male' ? "#2551A1" : "#2C2C2C",
						borderRadius: 100,
						borderWidth: selectedGender === 'male' ? 2 : 1,
						paddingVertical: 14,
						marginBottom: 20,
						marginHorizontal: 13,
					}} 
					onPress={() => setSelectedGender('male')}
				>
					<Text 
						style={{
							color: selectedGender === 'male' ? "#FFFFFF" : "#2C2C2C",
							fontSize: 14,
							fontWeight: selectedGender === 'male' ? "600" : "normal",
						}}>
						{"Male"}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: selectedGender === 'female' ? "#2551A1" : "#FFFFFF",
						borderColor: selectedGender === 'female' ? "#2551A1" : "#2C2C2C",
						borderRadius: 100,
						borderWidth: selectedGender === 'female' ? 2 : 1,
						paddingVertical: 14,
						marginBottom: 20,
						marginHorizontal: 13,
					}}
					onPress={() => setSelectedGender('female')}
				>
					<Text 
						style={{
							color: selectedGender === 'female' ? "#FFFFFF" : "#2C2C2C",
							fontSize: 14,
							fontWeight: selectedGender === 'female' ? "600" : "normal",
						}}>
						{"Female"}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: selectedGender === 'other' ? "#2551A1" : "#FFFFFF",
						borderColor: selectedGender === 'other' ? "#2551A1" : "#2C2C2C",
						borderRadius: 100,
						borderWidth: selectedGender === 'other' ? 2 : 1,
						paddingVertical: 14,
						marginBottom: 318,
						marginHorizontal: 13,
					}} 
					onPress={() => setSelectedGender('other')}
				>
					<Text 
						style={{
							color: selectedGender === 'other' ? "#FFFFFF" : "#2C2C2C",
							fontSize: 14,
							fontWeight: selectedGender === 'other' ? "600" : "normal",
						}}>
						{"Other"}
					</Text>
				</TouchableOpacity>
				<View 
					style={{
						width: 360,
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
							backgroundColor: selectedGender ? "#2551A1" : "#B7B7B7",
							borderRadius: 100,
							paddingVertical: 14,
							marginHorizontal: 15,
						}} 
						onPress={handleNext}
						disabled={!selectedGender}
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