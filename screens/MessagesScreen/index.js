import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, TextInput, PanResponder } from "react-native";

export default function MessagesScreen({ navigation }) {
	const [searchQuery, setSearchQuery] = useState('');

	// Swipe gesture navigation
	const screenOrder = ['Home', 'AITravelAgent', 'Messages', 'Profile'];
	const currentScreenIndex = screenOrder.indexOf('Messages');

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
					// Swipe right from Messages - go to AITravelAgent (backward)
					navigation.navigate('AITravelAgent', { animate: true });
				} else {
					// Swipe left from Messages - go to Profile (forward)
					navigation.navigate('Profile', { animate: true });
				}
			}
		},
	});

	const conversations = [
		{
			id: '1',
			name: 'Anneliese Muller',
			lastMessage: "I'll be happy to help you!",
			time: '4h',
			avatar: '👩🏼‍🦰',
			unread: true
		},
		{
			id: '2', 
			name: 'Kevin Schneider',
			lastMessage: "Yes, definitely. Let me know when...",
			time: '1 day',
			avatar: '👨🏻',
			unread: true
		},
		{
			id: '3',
			name: 'Ivan Marcel',
			lastMessage: "Sounds good!",
			time: '18 hours',
			avatar: '👨🏽',
			unread: true
		},
		{
			id: '4',
			name: 'Darius Johnson',
			lastMessage: "Happy to help you!",
			time: '6 hours',
			avatar: '👨🏿',
			unread: false
		}
	];

	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}
			{...panResponder.panHandlers}>
			
			{/* Header */}
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingHorizontal: 20,
				paddingVertical: 15,
				borderBottomWidth: 1,
				borderBottomColor: '#F0F0F0'
			}}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text style={{ fontSize: 18 }}>←</Text>
				</TouchableOpacity>
				<Text style={{
					fontSize: 18,
					fontWeight: '600',
					color: '#2551A1'
				}}>
					Messages
				</Text>
				<TouchableOpacity>
					<Text style={{ fontSize: 18 }}>⋯</Text>
				</TouchableOpacity>
			</View>

			{/* Search Bar */}
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				backgroundColor: '#F5F5F5',
				margin: 15,
				paddingHorizontal: 15,
				paddingVertical: 10,
				borderRadius: 25
			}}>
				<Text style={{ marginRight: 10, color: '#999' }}>🔍</Text>
				<TextInput
					style={{
						flex: 1,
						fontSize: 16,
						color: '#333'
					}}
					placeholder="Search conversations..."
					placeholderTextColor="#999"
					value={searchQuery}
					onChangeText={setSearchQuery}
				/>
			</View>

			{/* Conversations List */}
			<ScrollView style={{ flex: 1 }}>
				{conversations.filter(conv => 
					conv.name.toLowerCase().includes(searchQuery.toLowerCase())
				).map((conversation, index) => (
					<TouchableOpacity
						key={conversation.id}
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							paddingHorizontal: 20,
							paddingVertical: 15,
							borderBottomWidth: 0.5,
							borderBottomColor: '#F0F0F0'
						}}
						onPress={() => navigation.navigate('ChatConversation', { conversation })}
					>
						{/* Avatar */}
						<View style={{
							width: 50,
							height: 50,
							borderRadius: 25,
							backgroundColor: '#E3F2FD',
							alignItems: 'center',
							justifyContent: 'center',
							marginRight: 15
						}}>
							<Text style={{ fontSize: 20 }}>{conversation.avatar}</Text>
						</View>

						{/* Message Content */}
						<View style={{ flex: 1 }}>
							<View style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: 5
							}}>
								<Text style={{
									fontSize: 16,
									fontWeight: '600',
									color: '#2C2C2C'
								}}>
									{conversation.name}
								</Text>
								<Text style={{
									fontSize: 12,
									color: '#999'
								}}>
									{conversation.time}
								</Text>
							</View>
							<View style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}>
								<Text style={{
									fontSize: 14,
									color: '#666',
									flex: 1
								}} numberOfLines={1}>
									{conversation.lastMessage}
								</Text>
								{conversation.unread && (
									<View style={{
										width: 8,
										height: 8,
										borderRadius: 4,
										backgroundColor: '#2551A1',
										marginLeft: 10
									}} />
								)}
							</View>
						</View>
					</TouchableOpacity>
				))}
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
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/7n3wcgua_expires_30_days.png" }} 
							resizeMode="stretch"
							style={{ width: 20, height: 20, tintColor: '#FFFFFF' }}
						/>
					</TouchableOpacity>
					
					<TouchableOpacity 
						onPress={() => navigation.navigate('Profile')}
						style={{
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
							style={{ width: 24, height: 24, tintColor: '#8E8E93' }}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}