import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, Dimensions, PanResponder } from "react-native";
import posts from '../../data/posts';

const { width } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {
	const [activeTab, setActiveTab] = useState(0);

	// Swipe gesture navigation
	const screenOrder = ['Home', 'AITravelAgent', 'Messages', 'Profile'];
	const currentScreenIndex = screenOrder.indexOf('Profile');

	const panResponder = PanResponder.create({
		onMoveShouldSetPanResponder: (_, gestureState) => {
			// Only respond to horizontal swipes
			return Math.abs(gestureState.dx) > Math.abs(gestureState.dy) && Math.abs(gestureState.dx) > 20;
		},
		onPanResponderMove: (_, gestureState) => {
			// Optional: Add visual feedback during swipe
		},
		onPanResponderRelease: (_, gestureState) => {
			const { dx } = gestureState;
			const swipeThreshold = 50;

			if (Math.abs(dx) > swipeThreshold) {
				if (dx > 0) {
					// Swipe right from Profile - go to Messages (backward)
					navigation.navigate('Messages', { animate: true });
				} else {
					// Swipe left from Profile - go to Home (forward)
					navigation.navigate('Home', { animate: true });
				}
			}
		},
	});

	// Use shared posts as bookmarked posts
	const bookmarked = posts;

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} {...panResponder.panHandlers}>
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
					{/* Profile Image + flag under */}
					<View style={{ alignItems: 'center', marginBottom: 10 }}>
							{/* Profile avatar with flag overlay. To use a custom local image, place it at `assets/profile.jpg` and
								change PROFILE_AVATAR to { uri: '' } or require('../../assets/profile.jpg') as needed. */}
							<View style={{ width: 110, height: 110, borderRadius: 55, alignItems: 'center', justifyContent: 'center' }}>
								<Image
									source={{ uri: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/profileGuy.png' }}
									style={{ width: 110, height: 110, borderRadius: 55, backgroundColor: '#E3F2FD' }}
								/>

								{/* Flag badge (overlay) - bottom right of avatar */}
								<View style={{ position: 'absolute', right: 2, bottom: 2, backgroundColor: '#FFFFFF', borderRadius: 12, paddingHorizontal: 6, paddingVertical: 2, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
									<Text style={{ fontSize: 12 }}>🇺🇸</Text>
								</View>
							</View>

							<Text style={{ fontSize: 18, fontWeight: '700', marginTop: 10 }}>Jason</Text>
						<Text style={{ fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 20, paddingHorizontal: 20 }}>
							After living in Seattle for a couple of years, I'm here to conquer and explore the world.
						</Text>
						<View style={{ marginTop: 8 }}>
							<Text style={{ fontSize: 12 }}>🇺🇸</Text>
						</View>
					</View>

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
					// Bookmarked Posts Grid (reuse Home posts) - rectangular tiles
					<View style={{
						flexDirection: 'row',
						flexWrap: 'wrap',
						padding: 5
					}}>
						{bookmarked.slice(0,9).map((post) => {
							// Use percentage width to guarantee 3 columns, compute pixel height from screen width
							const tileWidthPx = Math.floor(width / 3);
							const tileHeight = Math.round(tileWidthPx * 1.6);
							return (
								<TouchableOpacity
									key={post.id}
									style={{
										width: '33.3333%',
										height: tileHeight,
										backgroundColor: '#F5F5F5',
										padding: 1,
										borderRadius: 8,
										overflow: 'hidden'
									}}
									onPress={() => navigation.navigate('PostDetail', { post })}
								>
									<Image
										source={{ uri: post.image }}
										style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
										resizeMode="cover"
									/>
									{/* rating top-left */}
									<View style={{ position: 'absolute', top: 6, left: 6, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 12, paddingHorizontal: 6, paddingVertical: 2 }}>
										<Text style={{ color: '#fff', fontSize: 10 }}>{post.rating}</Text>
									</View>
									{/* flag top-right */}
									<View style={{ position: 'absolute', top: 6, right: 6, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 12, paddingHorizontal: 6, paddingVertical: 2 }}>
										<Text style={{ fontSize: 12 }}>{post.flag}</Text>
									</View>
									{/* likes bottom-right */}
									<View style={{ position: 'absolute', bottom: 6, right: 6, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 12, paddingHorizontal: 6, paddingVertical: 2 }}>
										<Text style={{ color: '#fff', fontSize: 10 }}>{post.likes}</Text>
									</View>
								</TouchableOpacity>
							);
						})}
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