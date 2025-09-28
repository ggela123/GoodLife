import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {
	const [activeTab, setActiveTab] = useState(0);

	// Sample posts data
	const posts = [
		{ id: '1', type: 'image', content: '🏔️', location: 'Switzerland' },
		{ id: '2', type: 'image', content: '🏰', location: 'Czech Republic' },
		{ id: '3', type: 'image', content: '🌸', location: 'Japan' },
		{ id: '4', type: 'image', content: '🏛️', location: 'Greece' },
		{ id: '5', type: 'image', content: '🌊', location: 'Maldives' },
		{ id: '6', type: 'image', content: '🌴', location: 'Thailand' },
		{ id: '7', type: 'image', content: '🗻', location: 'Peru' },
		{ id: '8', type: 'image', content: '🏕️', location: 'Canada' },
		{ id: '9', type: 'image', content: '🌅', location: 'Indonesia' },
	];

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
			{/* Header */}
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingHorizontal: 20,
				paddingVertical: 15
			}}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text style={{ fontSize: 18 }}>←</Text>
				</TouchableOpacity>
				<Text style={{
					fontSize: 18,
					fontWeight: '600',
					color: '#2551A1'
				}}>
					Profile
				</Text>
				<TouchableOpacity>
					<Text style={{ fontSize: 18 }}>⋯</Text>
				</TouchableOpacity>
			</View>

			<ScrollView style={{ flex: 1 }}>
				{/* Profile Header */}
				<View style={{
					alignItems: 'center',
					paddingVertical: 20,
					paddingHorizontal: 20
				}}>
					{/* Profile Image */}
					<View style={{
						width: 100,
						height: 100,
						borderRadius: 50,
						backgroundColor: '#E3F2FD',
						alignItems: 'center',
						justifyContent: 'center',
						marginBottom: 15
					}}>
						<Text style={{ fontSize: 40 }}>👤</Text>
					</View>

					{/* Name */}
					<Text style={{
						fontSize: 24,
						fontWeight: '700',
						color: '#2C2C2C',
						marginBottom: 5
					}}>
						Jason
					</Text>

					{/* Bio */}
					<Text style={{
						fontSize: 14,
						color: '#666',
						textAlign: 'center',
						lineHeight: 20,
						paddingHorizontal: 20
					}}>
						After living in Seattle for a couple of years, I'm here to conquer and explore the world.
					</Text>

					{/* Stats */}
					<View style={{
						flexDirection: 'row',
						marginTop: 20,
						marginBottom: 20
					}}>
						<View style={{ alignItems: 'center', marginHorizontal: 20 }}>
							<Text style={{
								fontSize: 20,
								fontWeight: '700',
								color: '#2551A1'
							}}>12</Text>
							<Text style={{
								fontSize: 12,
								color: '#666'
							}}>Posts</Text>
						</View>
						<View style={{ alignItems: 'center', marginHorizontal: 20 }}>
							<Text style={{
								fontSize: 20,
								fontWeight: '700',
								color: '#2551A1'
							}}>248</Text>
							<Text style={{
								fontSize: 12,
								color: '#666'
							}}>Followers</Text>
						</View>
						<View style={{ alignItems: 'center', marginHorizontal: 20 }}>
							<Text style={{
								fontSize: 20,
								fontWeight: '700',
								color: '#2551A1'
							}}>180</Text>
							<Text style={{
								fontSize: 12,
								color: '#666'
							}}>Following</Text>
						</View>
					</View>

					{/* Edit Profile Button */}
					<TouchableOpacity style={{
						backgroundColor: '#2551A1',
						paddingHorizontal: 30,
						paddingVertical: 10,
						borderRadius: 25,
						marginBottom: 20
					}}>
						<Text style={{
							color: '#FFFFFF',
							fontSize: 14,
							fontWeight: '600'
						}}>
							Edit Profile
						</Text>
					</TouchableOpacity>
				</View>

				{/* Tabs */}
				<View style={{
					flexDirection: 'row',
					borderBottomWidth: 1,
					borderBottomColor: '#F0F0F0',
					paddingHorizontal: 20
				}}>
					{['Posts', 'Reviews', 'About'].map((tab, index) => (
						<TouchableOpacity
							key={index}
							style={{
								flex: 1,
								alignItems: 'center',
								paddingVertical: 15,
								borderBottomWidth: activeTab === index ? 2 : 0,
								borderBottomColor: '#2551A1'
							}}
							onPress={() => setActiveTab(index)}
						>
							<Text style={{
								fontSize: 14,
								fontWeight: activeTab === index ? '600' : 'normal',
								color: activeTab === index ? '#2551A1' : '#666'
							}}>
								{tab}
							</Text>
						</TouchableOpacity>
					))}
				</View>

				{/* Content based on active tab */}
				{activeTab === 0 && (
					// Posts Grid
					<View style={{
						flexDirection: 'row',
						flexWrap: 'wrap',
						padding: 5
					}}>
						{posts.map((post, index) => (
							<TouchableOpacity
								key={post.id}
								style={{
									width: (width - 20) / 3,
									height: (width - 20) / 3,
									backgroundColor: '#F5F5F5',
									margin: 2.5,
									borderRadius: 8,
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<Text style={{ fontSize: 40 }}>{post.content}</Text>
								<Text style={{
									position: 'absolute',
									bottom: 5,
									fontSize: 10,
									color: '#666',
									textAlign: 'center'
								}}>
									{post.location}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				)}

				{activeTab === 1 && (
					// Reviews Tab
					<View style={{ padding: 20 }}>
						<Text style={{
							fontSize: 16,
							color: '#666',
							textAlign: 'center',
							marginTop: 50
						}}>
							No reviews yet
						</Text>
					</View>
				)}

				{activeTab === 2 && (
					// About Tab
					<View style={{ padding: 20 }}>
						<View style={{ marginBottom: 20 }}>
							<Text style={{
								fontSize: 16,
								fontWeight: '600',
								color: '#2C2C2C',
								marginBottom: 10
							}}>
								About Jason
							</Text>
							<Text style={{
								fontSize: 14,
								color: '#666',
								lineHeight: 20
							}}>
								Passionate traveler and adventure seeker. Love connecting with locals and experiencing authentic cultures around the world.
							</Text>
						</View>
						
						<View style={{ marginBottom: 20 }}>
							<Text style={{
								fontSize: 16,
								fontWeight: '600',
								color: '#2C2C2C',
								marginBottom: 10
							}}>
								Interests
							</Text>
							<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
								{['Photography', 'Hiking', 'Local Food', 'Culture', 'Adventure'].map((interest, index) => (
									<View key={index} style={{
										backgroundColor: '#E3F2FD',
										paddingHorizontal: 12,
										paddingVertical: 6,
										borderRadius: 15,
										marginRight: 8,
										marginBottom: 8
									}}>
										<Text style={{
											fontSize: 12,
											color: '#2551A1'
										}}>
											{interest}
										</Text>
									</View>
								))}
							</View>
						</View>
					</View>
				)}
			</ScrollView>

			{/* Bottom Navigation */}
			<View style={{
				backgroundColor: "#FFFFFF",
				paddingVertical: 12,
				paddingHorizontal: 20,
				borderTopWidth: 1,
				borderTopColor: "#E5E5E5",
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: -2,
				},
				shadowOpacity: 0.1,
				shadowRadius: 3.84,
				elevation: 5,
			}}>
				<View style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginHorizontal: 16,
				}}>
					<TouchableOpacity 
						onPress={() => navigation.navigate('Home')}
						style={{
							padding: 8,
							width: 40,
							height: 40,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/c1txpgcc_expires_30_days.png" }} 
							resizeMode="stretch"
							style={{ width: 24, height: 24, tintColor: '#8E8E93' }}
						/>
					</TouchableOpacity>
					
					<TouchableOpacity 
						onPress={() => navigation.navigate('AITravelAgent')}
						style={{
							padding: 8,
							width: 40,
							height: 40,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/ja0fjaox_expires_30_days.png" }} 
							resizeMode="stretch"
							style={{ width: 24, height: 24, tintColor: '#8E8E93' }}
						/>
					</TouchableOpacity>
					
					<TouchableOpacity 
						onPress={() => navigation.navigate('Messages')}
						style={{
							padding: 8,
							width: 40,
							height: 40,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/7n3wcgua_expires_30_days.png" }} 
							resizeMode="stretch"
							style={{ width: 24, height: 24, tintColor: '#8E8E93' }}
						/>
					</TouchableOpacity>
					
					<TouchableOpacity 
						style={{
							backgroundColor: '#007AFF',
							borderRadius: 12,
							padding: 8,
							width: 40,
							height: 40,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Image
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/5fjoe8j2_expires_30_days.png" }} 
							resizeMode="stretch"
							style={{ width: 20, height: 20, tintColor: '#FFFFFF' }}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}