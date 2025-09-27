import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, TextInput, FlatList } from "react-native";

export default function HomeScreen({ navigation }) {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('Recommended');

	const categories = ['Recommended', 'Europe', 'Asia', 'Americas', 'Africa'];
	
	const sampleOpportunities = [
		{ id: '1', title: 'Volunteer Teaching in Barcelona', location: 'Barcelona, Spain', type: 'Volunteer' },
		{ id: '2', title: 'Backpacking Through Southeast Asia', location: 'Thailand, Vietnam', type: 'Adventure' },
		{ id: '3', title: 'Digital Nomad Hub in Lisbon', location: 'Lisbon, Portugal', type: 'Work' },
		{ id: '4', title: 'Cultural Exchange in Tokyo', location: 'Tokyo, Japan', type: 'Cultural' },
		{ id: '5', title: 'Surf Camp in Costa Rica', location: 'Costa Rica', type: 'Adventure' },
	];

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
				{/* Search Bar */}
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#F5F5F5",
						borderRadius: 25,
						paddingVertical: 14,
						paddingHorizontal: 23,
						marginHorizontal: 15,
						marginVertical: 10,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/18bcrmj6_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 10,
						}}
					/>
					<TextInput
						style={{
							color: "#2C2C2C",
							fontSize: 12,
							flex: 1,
						}}
						placeholder="Location or keywords"
						placeholderTextColor="#B7B7B7"
						value={searchQuery}
						onChangeText={setSearchQuery}
					/>
					<TouchableOpacity style={{ marginLeft: 10 }}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/oas9ox5f_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 18,
								height: 18,
								marginRight: 3,
							}}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/fxowwkx7_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 18,
								height: 18,
							}}
						/>
					</TouchableOpacity>
				</View>

				{/* Category Filter */}
				<ScrollView 
					horizontal 
					showsHorizontalScrollIndicator={false}
					style={{
						paddingVertical: 10,
						paddingLeft: 22,
						marginBottom: 20,
					}}
				>
					{categories.map((category, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => setSelectedCategory(category)}
							style={{
								marginRight: 20,
								paddingBottom: 5,
								borderBottomWidth: selectedCategory === category ? 2 : 0,
								borderBottomColor: "#2551A1",
							}}
						>
							<Text 
								style={{
									color: selectedCategory === category ? "#2551A1" : "#B7B7B7",
									fontSize: 14,
									fontWeight: selectedCategory === category ? "600" : "normal",
								}}>
								{category}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>

				{/* Opportunities List */}
				<View style={{ paddingHorizontal: 15 }}>
					{sampleOpportunities.map((opportunity, index) => (
						<TouchableOpacity
							key={opportunity.id}
							style={{
								backgroundColor: "#FFFFFF",
								borderRadius: 15,
								padding: 20,
								marginBottom: 15,
								shadowColor: "#000",
								shadowOffset: {
									width: 0,
									height: 2,
								},
								shadowOpacity: 0.1,
								shadowRadius: 3.84,
								elevation: 5,
								borderWidth: 1,
								borderColor: "#F0F0F0",
							}}
							onPress={() => {
								// Navigate to opportunity details
								// navigation.navigate('OpportunityDetails', { opportunity });
							}}
						>
							<View style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginBottom: 8,
							}}>
								<View style={{
									backgroundColor: "#E3F2FD",
									paddingHorizontal: 8,
									paddingVertical: 4,
									borderRadius: 12,
									marginRight: 10,
								}}>
									<Text style={{
										color: "#2551A1",
										fontSize: 10,
										fontWeight: "600",
									}}>
										{opportunity.type}
									</Text>
								</View>
							</View>
							<Text style={{
								color: "#2C2C2C",
								fontSize: 16,
								fontWeight: "600",
								marginBottom: 5,
							}}>
								{opportunity.title}
							</Text>
							<Text style={{
								color: "#868686",
								fontSize: 14,
							}}>
								📍 {opportunity.location}
							</Text>
						</TouchableOpacity>
					))}
				</View>

				{/* Bottom Navigation Placeholder */}
				<View style={{
					flexDirection: 'row',
					justifyContent: 'space-around',
					alignItems: 'center',
					backgroundColor: "#FFFFFF",
					paddingVertical: 15,
					borderTopWidth: 1,
					borderTopColor: "#F0F0F0",
					marginTop: 20,
				}}>
					<TouchableOpacity style={{ alignItems: 'center' }}>
						<Text style={{ color: "#2551A1", fontSize: 12 }}>🏠 Home</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignItems: 'center' }}>
						<Text style={{ color: "#B7B7B7", fontSize: 12 }}>🔍 Explore</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignItems: 'center' }}>
						<Text style={{ color: "#B7B7B7", fontSize: 12 }}>💬 Messages</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignItems: 'center' }}>
						<Text style={{ color: "#B7B7B7", fontSize: 12 }}>👤 Profile</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}