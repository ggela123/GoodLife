import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
export default (props) => {
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
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/rtbasfeq_expires_30_days.png"}} 
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
						marginBottom: 52,
					}}>
					<Text 
						style={{
							color: "#2551A1",
							fontSize: 20,
							fontWeight: "bold",
						}}>
						{"What’s your gender?"}
					</Text>
				</View>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						borderColor: "#2C2C2C",
						borderRadius: 100,
						borderWidth: 1,
						paddingVertical: 14,
						marginBottom: 20,
						marginHorizontal: 13,
					}} onPress={()=>alert('Pressed!')}>
					<Text 
						style={{
							color: "#2C2C2C",
							fontSize: 14,
						}}>
						{"Male"}
					</Text>
				</TouchableOpacity>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						borderColor: "#2C2C2C",
						borderRadius: 100,
						borderWidth: 1,
						paddingVertical: 14,
						marginBottom: 20,
						marginHorizontal: 13,
					}}>
					<Text 
						style={{
							color: "#2C2C2C",
							fontSize: 14,
							marginLeft: 134,
						}}>
						{"Female"}
					</Text>
				</View>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						borderColor: "#2C2C2C",
						borderRadius: 100,
						borderWidth: 1,
						paddingVertical: 14,
						marginBottom: 321,
						marginHorizontal: 13,
					}} onPress={()=>alert('Pressed!')}>
					<Text 
						style={{
							color: "#2C2C2C",
							fontSize: 14,
						}}>
						{"Other"}
					</Text>
				</TouchableOpacity>
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
							}} onPress={()=>alert('Pressed!')}>
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