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
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/as7z0kup_expires_30_days.png"}} 
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
							width: 241,
						}}>
						{"Which countries would you like to visit?"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#626365",
						fontSize: 15,
						marginBottom: 5,
						marginLeft: 13,
					}}>
					{"Select up to 3"}
				</Text>
				<View 
					style={{
						height: 1,
						backgroundColor: "#868686",
						marginBottom: 26,
						marginHorizontal: 13,
					}}>
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
						paddingVertical: 11,
						paddingHorizontal: 18,
						marginBottom: 24,
						marginHorizontal: 15,
					}} onPress={()=>alert('Pressed!')}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/e09slrsi_expires_30_days.png"}} 
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
						{"Switzerland"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/6io9nag6_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 15,
							width: 15,
							height: 15,
						}}
					/>
				</TouchableOpacity>
				<Text 
					style={{
						color: "#2C2C2C",
						fontSize: 12,
						marginBottom: 8,
						marginLeft: 13,
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
						marginBottom: 24,
						marginHorizontal: 13,
					}} onPress={()=>alert('Pressed!')}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/mqkvtavr_expires_30_days.png"}} 
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
						{"Croatia"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/nnpyldad_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 15,
							width: 15,
							height: 15,
						}}
					/>
				</TouchableOpacity>
				<Text 
					style={{
						color: "#2C2C2C",
						fontSize: 12,
						marginBottom: 8,
						marginLeft: 16,
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
						marginBottom: 173,
						marginHorizontal: 16,
					}} onPress={()=>alert('Pressed!')}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/3oqewbwh_expires_30_days.png"}} 
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
						{"Germany"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/rdgyalmw_expires_30_days.png"}} 
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
							}} onPress={() => navigation.navigate('WhatOpportunitiesAreYouLookingFor')}>
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