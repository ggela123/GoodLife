import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";

export default function WelcomeScreen({ navigation }) {
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
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/ab0x56hu_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						width: 119,
						height: 119,
						marginBottom: 31,
					}}
				/>
				<Text 
					style={{
						color: "#9C9C9C",
						fontSize: 40,
						fontWeight: "bold",
						textAlign: "center",
						marginBottom: 31,
						marginHorizontal: 50,
					}}>
					{"Welcome To \nGoodLife"}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 15,
						textAlign: "center",
						marginBottom: 174,
						width: 248,
					}}>
					{"Explore places, make friends, and spread good . Get started below!"}
				</Text>
				<View 
					style={{
						paddingTop: 17,
						marginBottom: 45,
					}}>
					<View >
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								paddingTop: 40,
								paddingBottom: 15,
							}}>
							<TouchableOpacity 
								style={{
									alignItems: "center",
									backgroundColor: "#2551A1",
									borderRadius: 100,
									paddingVertical: 14,
									marginHorizontal: 40,
								}} 
								onPress={() => navigation.navigate('Login')}
							>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 14,
									}}>
									{"Log In"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<TouchableOpacity 
						style={{
							position: "absolute",
							top: 0,
							right: 41,
							left: 41,
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							borderColor: "#2C2C2C",
							borderRadius: 100,
							borderWidth: 1,
						}}
						onPress={() => navigation.navigate('SignUpCredentials')}
					>
						<Text 
							style={{
								color: "#2C2C2C",
								fontSize: 14,
								marginVertical: 14,
							}}>
							{"Create"}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}