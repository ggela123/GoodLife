import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
export default ({ navigation }) => {
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
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/xczgpcv6_expires_30_days.png"}} 
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
						marginBottom: 39,
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
				<Text 
					style={{
						color: "#242424",
						fontSize: 15,
						marginBottom: 20,
						marginLeft: 16,
						width: 145,
					}}>
					{"NGO\nCommunity\nNon-Profit School\nHomestay\nHostel\nCamping\nFarm\nPermaculture project\nEco Village\nHolistic Center\nGuest House\nEco Lodge"}
				</Text>
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
							}} onPress={() => navigation.navigate('Home')}>
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