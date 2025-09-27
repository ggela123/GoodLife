import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, TextInput, } from "react-native";

export default function LoginScreen({ navigation }) {
	const column = () => {
		return (
			<View 
				style={{
					paddingBottom: 126,
				}}>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/zbvznbgs_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						height: 177,
					}}
				/>
				<View 
					style={{
						position: "absolute",
						bottom: 45,
						right: 0,
						left: 0,
						height: 100,
						backgroundColor: "#FFFFFF",
					}}>
				</View>
			</View>
		)
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
				<TouchableOpacity 
					onPress={() => navigation.goBack()}
					style={{
						marginBottom: 22,
						marginLeft: 13,
						padding: 5,
					}}
				>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/x9j1s0tj_expires_30_days.png"}} 
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
						marginBottom: 34,
					}}>
					<Text 
						style={{
							color: "#2551A1",
							fontSize: 20,
							fontWeight: "bold",
						}}>
						{"Welcome!"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#2C2C2C",
						fontSize: 12,
						marginBottom: 8,
						marginLeft: 15,
					}}>
					{"Email or Phone Number"}
				</Text>
				<TextInput 
					style={{
						height: 45,
						backgroundColor: "#FFFFFF",
						borderColor: "#868686",
						borderRadius: 15,
						borderWidth: 1,
						paddingHorizontal: 15,
						fontSize: 14,
						marginBottom: 28,
						marginHorizontal: 15,
					}}
					placeholder="Enter your email or phone"
					placeholderTextColor="#B7B7B7"
				/>
				<Text 
					style={{
						color: "#2C2C2C",
						fontSize: 12,
						marginBottom: 8,
						marginLeft: 15,
					}}>
					{"Password"}
				</Text>
				<TextInput 
					style={{
						height: 45,
						backgroundColor: "#FFFFFF",
						borderColor: "#868686",
						borderRadius: 15,
						borderWidth: 1,
						paddingHorizontal: 15,
						fontSize: 14,
						marginBottom: 50,
						marginHorizontal: 15,
					}}
					placeholder="Enter your password"
					placeholderTextColor="#B7B7B7"
					secureTextEntry
				/>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: "#2551A1",
						borderRadius: 100,
						paddingVertical: 14,
						marginBottom: 21,
						marginHorizontal: 15,
					}} 
					onPress={() => navigation.navigate('Loading')}
				>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 14,
						}}>
						{"Log In"}
					</Text>
				</TouchableOpacity>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 28,
					}}>
					<Text 
						style={{
							color: "#2551A1",
							fontSize: 14,
						}}>
						{"Forgot Password?"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 21,
						marginHorizontal: 15,
					}}>
					<View 
						style={{
							width: 148,
							height: 1,
							backgroundColor: "#868686",
							marginRight: 8,
						}}>
					</View>
					<Text 
						style={{
							color: "#868686",
							fontSize: 12,
							marginRight: 10,
						}}>
						{"OR"}
					</Text>
					<View 
						style={{
							height: 1,
							flex: 1,
							backgroundColor: "#868686",
						}}>
					</View>
				</View>
				{column()}
			</ScrollView>
		</SafeAreaView>
	)
}