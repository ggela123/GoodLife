import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, TextInput } from "react-native";

export default function MessagesScreen({ navigation }) {
	const [searchQuery, setSearchQuery] = useState('');

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
			}}>
			
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
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center',
				backgroundColor: '#FFFFFF',
				paddingVertical: 15,
				borderTopWidth: 1,
				borderTopColor: '#F0F0F0'
			}}>
				<TouchableOpacity 
					style={{ alignItems: 'center' }}
					onPress={() => navigation.navigate('Home')}
				>
					<Text style={{ fontSize: 20, marginBottom: 2 }}>🏠</Text>
					<Text style={{ fontSize: 10, color: '#B7B7B7' }}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={{ alignItems: 'center' }}
					onPress={() => navigation.navigate('AITravelAgent')}
				>
					<Text style={{ fontSize: 20, marginBottom: 2 }}>✨</Text>
					<Text style={{ fontSize: 10, color: '#B7B7B7' }}>AI</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ alignItems: 'center' }}>
					<Text style={{ fontSize: 20, marginBottom: 2 }}>💬</Text>
					<Text style={{ fontSize: 10, color: '#2551A1' }}>Messages</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={{ alignItems: 'center' }}
					onPress={() => navigation.navigate('Profile')}
				>
					<Text style={{ fontSize: 20, marginBottom: 2 }}>👤</Text>
					<Text style={{ fontSize: 10, color: '#B7B7B7' }}>Profile</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}