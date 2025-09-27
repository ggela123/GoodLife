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
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/8qzvend7_expires_30_days.png"}} 
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
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						borderColor: "#868686",
						borderRadius: 15,
						borderWidth: 1,
						paddingVertical: 7,
						paddingHorizontal: 18,
						marginBottom: 435,
						marginHorizontal: 15,
					}} onPress={()=>alert('Pressed!')}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/bcyv0pdj_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 24,
							height: 24,
							marginRight: 12,
						}}
					/>
					<Text 
						style={{
							color: "#626365",
							fontSize: 12,
							flex: 1,
						}}>
						{"United States of America"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/dxgdea0m_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 15,
							width: 15,
							height: 15,
						}}
					/>
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