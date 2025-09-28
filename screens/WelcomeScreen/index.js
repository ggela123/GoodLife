import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";

export default function WelcomeScreen({ navigation }) {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<View 
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
					paddingHorizontal: 30,
				}}>
				{/* Logo - Centered */}
				<View style={{ alignItems: "center", marginBottom: 40 }}>
					<Image
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/ab0x56hu_expires_30_days.png"}} 
						resizeMode={"stretch"}
						style={{
							width: 119,
							height: 119,
						}}
					/>
				</View>

				{/* Title - Properly styled */}
				<View style={{ alignItems: "center", marginBottom: 40 }}>
					<Text 
						style={{
							color: "#9C9C9C",
							fontSize: 45,
							fontWeight: "800",
							textAlign: "center",
						}}>
						{"Welcome To"}
					</Text>
					<Text 
						style={{
							color: "#2551A1",
							fontSize: 45,
							fontWeight: "800",
							textAlign: "center",
						}}>
						{"GoodLife"}
					</Text>
				</View>

				{/* Subtitle - Centered with proper spacing */}
				<Text 
					style={{
						color: "#000000",
						fontSize: 18,
						fontWeight: "80",
						textAlign: "center",
						lineHeight: 24,
						marginBottom: 80,
						paddingHorizontal: 20,
					}}>
					{"Explore places, make friends, and spread good. Get started below!"}
				</Text>

				{/* Buttons - Properly stacked */}
				<View style={{ width: "100%", paddingHorizontal: 20 }}>
					<TouchableOpacity 
						style={{
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							borderColor: "#2C2C2C",
							borderRadius: 25,
							borderWidth: 1,
							paddingVertical: 16,
							marginBottom: 16,
						}} 
						onPress={() => navigation.navigate('WhatTypeOfAccount')}
					>
						<Text 
							style={{
								color: "#2C2C2C",
								fontSize: 16,
								fontWeight: "800",
							}}>
							{"Create"}
						</Text>
					</TouchableOpacity>

					<TouchableOpacity 
						style={{
							alignItems: "center",
							backgroundColor: "#2551A1",
							borderRadius: 25,
							paddingVertical: 16,
						}} 
						onPress={() => navigation.navigate('Login')}
					>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 16,
								fontWeight: "800",
							}}>
							{"Log In"}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}