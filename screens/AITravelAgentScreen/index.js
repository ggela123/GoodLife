import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from "react-native";

export default function AITravelAgentScreen({ navigation }) {
	const [messageText, setMessageText] = useState('');
	const [isPaused, setIsPaused] = useState(false);

	const messages = [
		{
			id: '1',
			text: "I'm looking to go to Iceland and have some farming opportunities through a volunteer exchange.",
			sender: 'user',
			time: '2:30 PM'
		},
		{
			id: '2',
			text: "That sounds like a great opportunity! What do you think about these options?",
			sender: 'ai',
			time: '2:31 PM'
		},
		{
			id: '3',
			text: "Iceland Farming Opportunities",
			sender: 'ai',
			time: '2:31 PM',
			isLink: true
		}
	];

	const sendMessage = () => {
		if (messageText.trim()) {
			// Here you would typically add the message and get AI response
			setMessageText('');
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
			{/* Header */}
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				paddingHorizontal: 20,
				paddingVertical: 15,
				borderBottomWidth: 1,
				borderBottomColor: '#333'
			}}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text style={{ fontSize: 18, color: '#FFFFFF' }}>←</Text>
				</TouchableOpacity>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Text style={{
						fontSize: 16,
						fontWeight: '600',
						color: '#FFFFFF'
					}}>
						AI Travel Agent Assistant
					</Text>
				</View>
				<TouchableOpacity>
					<Text style={{ fontSize: 18, color: '#FFFFFF' }}>ℹ️</Text>
				</TouchableOpacity>
			</View>

			{/* Messages */}
			<ScrollView 
				style={{ flex: 1, paddingHorizontal: 20 }}
				showsVerticalScrollIndicator={false}
			>
				<View style={{ paddingVertical: 20 }}>
					{messages.map((message, index) => (
						<View
							key={message.id}
							style={{
								alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
								maxWidth: '85%',
								marginVertical: 8
							}}
						>
							{message.sender === 'ai' && (
								<View style={{
									flexDirection: 'row',
									alignItems: 'center',
									marginBottom: 5
								}}>
									<View style={{
										width: 20,
										height: 20,
										borderRadius: 10,
										backgroundColor: '#2551A1',
										alignItems: 'center',
										justifyContent: 'center',
										marginRight: 8
									}}>
										<Text style={{ color: '#FFFFFF', fontSize: 12 }}>✨</Text>
									</View>
									<Text style={{
										fontSize: 12,
										color: '#B7B7B7'
									}}>
										AI Assistant
									</Text>
								</View>
							)}

							<View style={{
								backgroundColor: message.sender === 'user' ? '#2551A1' : '#333333',
								paddingHorizontal: 16,
								paddingVertical: 12,
								borderRadius: 20,
								borderTopLeftRadius: message.sender === 'user' ? 20 : 5,
								borderTopRightRadius: message.sender === 'user' ? 5 : 20
							}}>
								<Text style={{
									color: '#FFFFFF',
									fontSize: 14,
									lineHeight: 20
								}}>
									{message.text}
								</Text>
								{message.isLink && (
									<TouchableOpacity style={{
										marginTop: 10,
										paddingVertical: 8,
										paddingHorizontal: 12,
										backgroundColor: '#2551A1',
										borderRadius: 15,
										alignItems: 'center'
									}}>
										<Text style={{
											color: '#FFFFFF',
											fontSize: 12,
											fontWeight: '600'
										}}>
											View Opportunities →
										</Text>
									</TouchableOpacity>
								)}
							</View>

							<Text style={{
								fontSize: 10,
								color: '#666',
								textAlign: message.sender === 'user' ? 'right' : 'left',
								marginTop: 5,
								marginHorizontal: 10
							}}>
								{message.time}
							</Text>
						</View>
					))}

					{/* Typing Indicator */}
					{!isPaused && (
						<View style={{
							alignSelf: 'flex-start',
							marginVertical: 8
						}}>
							<View style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginBottom: 5
							}}>
								<View style={{
									width: 20,
									height: 20,
									borderRadius: 10,
									backgroundColor: '#2551A1',
									alignItems: 'center',
									justifyContent: 'center',
									marginRight: 8
								}}>
									<Text style={{ color: '#FFFFFF', fontSize: 12 }}>✨</Text>
								</View>
								<Text style={{
									fontSize: 12,
									color: '#B7B7B7'
								}}>
									AI Assistant
								</Text>
							</View>
							<View style={{
								backgroundColor: '#333333',
								paddingHorizontal: 16,
								paddingVertical: 12,
								borderRadius: 20,
								borderTopLeftRadius: 5,
								flexDirection: 'row',
								alignItems: 'center'
							}}>
								<Text style={{ color: '#FFFFFF', marginRight: 5 }}>●</Text>
								<Text style={{ color: '#FFFFFF', marginRight: 5 }}>●</Text>
								<Text style={{ color: '#FFFFFF' }}>●</Text>
							</View>
						</View>
					)}
				</View>
			</ScrollView>

			{/* Pause/Resume Button */}
			<View style={{ alignItems: 'center', paddingVertical: 10 }}>
				<TouchableOpacity
					style={{
						width: 50,
						height: 50,
						borderRadius: 25,
						backgroundColor: '#333333',
						alignItems: 'center',
						justifyContent: 'center'
					}}
					onPress={() => setIsPaused(!isPaused)}
				>
					<Text style={{ color: '#FFFFFF', fontSize: 20 }}>
						{isPaused ? '▶️' : '⏸️'}
					</Text>
				</TouchableOpacity>
			</View>

			{/* Message Input */}
			<KeyboardAvoidingView 
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 20,
					paddingVertical: 15,
					borderTopWidth: 1,
					borderTopColor: '#333333',
					backgroundColor: '#000000'
				}}
			>
				<View style={{
					flex: 1,
					flexDirection: 'row',
					alignItems: 'center',
					backgroundColor: '#333333',
					borderRadius: 25,
					paddingHorizontal: 15,
					paddingVertical: 10
				}}>
					<TextInput
						style={{
							flex: 1,
							fontSize: 14,
							color: '#FFFFFF',
							maxHeight: 100
						}}
						placeholder="Ask AI Travel Agent"
						placeholderTextColor="#666"
						value={messageText}
						onChangeText={setMessageText}
						multiline
					/>
					<TouchableOpacity style={{ marginLeft: 10 }}>
						<Text style={{ fontSize: 16 }}>🎤</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={{
						marginLeft: 10,
						width: 40,
						height: 40,
						borderRadius: 20,
						backgroundColor: '#2551A1',
						alignItems: 'center',
						justifyContent: 'center'
					}}
					onPress={sendMessage}
				>
					<Text style={{ color: '#FFFFFF', fontSize: 16 }}>→</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>

			{/* Bottom Navigation */}
			<View style={{
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center',
				backgroundColor: '#000000',
				paddingVertical: 15,
				borderTopWidth: 1,
				borderTopColor: '#333333'
			}}>
				<TouchableOpacity 
					style={{ alignItems: 'center' }}
					onPress={() => navigation.navigate('Home')}
				>
					<Text style={{ fontSize: 20, marginBottom: 2 }}>🏠</Text>
					<Text style={{ fontSize: 10, color: '#666' }}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ alignItems: 'center' }}>
					<Text style={{ fontSize: 20, marginBottom: 2 }}>✨</Text>
					<Text style={{ fontSize: 10, color: '#2551A1' }}>AI</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={{ alignItems: 'center' }}
					onPress={() => navigation.navigate('Messages')}
				>
					<Text style={{ fontSize: 20, marginBottom: 2 }}>💬</Text>
					<Text style={{ fontSize: 10, color: '#666' }}>Messages</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={{ alignItems: 'center' }}
					onPress={() => navigation.navigate('Profile')}
				>
					<Text style={{ fontSize: 20, marginBottom: 2 }}>👤</Text>
					<Text style={{ fontSize: 10, color: '#666' }}>Profile</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}