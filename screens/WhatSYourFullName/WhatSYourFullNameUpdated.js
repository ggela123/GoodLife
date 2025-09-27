import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, TextInput } from "react-native";

export default function WhatSYourFullName({ navigation }) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const handleNext = () => {
		if (firstName.trim() && lastName.trim()) {
			navigation.navigate('WhatSYourGender');
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
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/yjevqwwn_expires_30_days.png"}} 
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
						marginBottom: 32,
					}}>
					<Text 
						style={{
							color: "#2551A1",
							fontSize: 20,
							fontWeight: "bold",
						}}>
						{"What's your full name?"}
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
					style={{
						height: 45,
						backgroundColor: "#FFFFFF",
						borderColor: firstName ? "#2551A1" : "#868686",
						borderRadius: 15,
						borderWidth: 1,
						paddingHorizontal: 15,
						fontSize: 14,
						marginBottom: 28,
						marginHorizontal: 15,
					}}
					placeholder="Enter your first name"
					placeholderTextColor="#B7B7B7"
					value={firstName}
					onChangeText={setFirstName}
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
					style={{
						height: 45,
						backgroundColor: "#FFFFFF",
						borderColor: lastName ? "#2551A1" : "#868686",
						borderRadius: 15,
						borderWidth: 1,
						paddingHorizontal: 15,
						fontSize: 14,
						marginBottom: 354,
						marginHorizontal: 15,
					}}
					placeholder="Enter your last name"
					placeholderTextColor="#B7B7B7"
					value={lastName}
					onChangeText={setLastName}
				/>
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
							backgroundColor: (firstName.trim() && lastName.trim()) ? "#2551A1" : "#B7B7B7",
							borderRadius: 100,
							paddingVertical: 14,
							marginHorizontal: 15,
						}} 
						onPress={handleNext}
						disabled={!(firstName.trim() && lastName.trim())}
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