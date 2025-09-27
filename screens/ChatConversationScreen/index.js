import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from "react-native";

export default function ChatConversationScreen({ navigation, route }) {
	const { conversation } = route?.params || { conversation: { name: 'Anneliese Muller', avatar: '👩🏼‍🦰' } };
	const [messageText, setMessageText] = useState('');

	const messages = [
		{
			id: '1',
			text: "Hi Anneliese! Your farm sounds amazing and we'd love to help you. When would be a good time to start?",
			sender: 'me',
			time: '10:30 AM'
		},
		{
			id: '2',
			text: "Perfect! You'd stay in our farmhouse, and we provide meals from the farm. We're looking for basic German skills but English works too!",
			sender: 'them',
			time: '10:45 AM'
		},
		{
			id: '3',
			text: "Sounds perfect! I'm available July 15-24. Does that work? Also, I need to ask about the next steps to confirm.",
			sender: 'me',
			time: '11:00 AM'
		},
		{
			id: '4',
			text: "Yes! No experience needed! Basic German helps but English works fine. I'll send the next steps to confirm.",
			sender: 'them',
			time: '11:15 AM'
		}
	];

	const sendMessage = () => {
		if (messageText.trim()) {
			// Here you would typically add the message to your state/database
			setMessageText('');
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
			{/* Header */}
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				paddingHorizontal: 20,
				paddingVertical: 15,
				borderBottomWidth: 1,
				borderBottomColor: '#F0F0F0'
			}}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text style={{ fontSize: 18, marginRight: 15 }}>←</Text>
				</TouchableOpacity>
				<View style={{
					width: 35,
					height: 35,
					borderRadius: 17.5,
					backgroundColor: '#E3F2FD',
					alignItems: 'center',
					justifyContent: 'center',
					marginRight: 10
				}}>
					<Text style={{ fontSize: 16 }}>{conversation.avatar}</Text>
				</View>
				<View style={{ flex: 1 }}>
					<Text style={{
						fontSize: 16,
						fontWeight: '600',
						color: '#2C2C2C'
					}}>
						{conversation.name}
					</Text>
					<Text style={{
						fontSize: 12,
						color: '#666'
					}}>
						Munich, Germany
					</Text>
				</View>
				<TouchableOpacity>
					<Text style={{ fontSize: 18 }}>⋯</Text>
				</TouchableOpacity>
			</View>

			{/* Messages */}
			<ScrollView 
				style={{ flex: 1, paddingHorizontal: 15 }}
				showsVerticalScrollIndicator={false}
			>
				{messages.map((message, index) => (
					<View
						key={message.id}
						style={{
							alignSelf: message.sender === 'me' ? 'flex-end' : 'flex-start',
							maxWidth: '80%',
							marginVertical: 5
						}}
					>
						<View style={{
							backgroundColor: message.sender === 'me' ? '#2551A1' : '#F0F0F0',
							paddingHorizontal: 15,
							paddingVertical: 10,
							borderRadius: 20,
							borderTopLeftRadius: message.sender === 'me' ? 20 : 5,
							borderTopRightRadius: message.sender === 'me' ? 5 : 20
						}}>
							<Text style={{
								color: message.sender === 'me' ? '#FFFFFF' : '#2C2C2C',
								fontSize: 14,
								lineHeight: 20
							}}>
								{message.text}
							</Text>
						</View>
						<Text style={{
							fontSize: 10,
							color: '#999',
							textAlign: message.sender === 'me' ? 'right' : 'left',
							marginTop: 5,
							marginHorizontal: 10
						}}>
							{message.time}
						</Text>
					</View>
				))}
			</ScrollView>

			{/* Message Input */}
			<KeyboardAvoidingView 
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 15,
					paddingVertical: 10,
					borderTopWidth: 1,
					borderTopColor: '#F0F0F0',
					backgroundColor: '#FFFFFF'
				}}
			>
				<View style={{
					flex: 1,
					flexDirection: 'row',
					alignItems: 'center',
					backgroundColor: '#F5F5F5',
					borderRadius: 25,
					paddingHorizontal: 15,
					paddingVertical: 10
				}}>
					<TextInput
						style={{
							flex: 1,
							fontSize: 14,
							color: '#333',
							maxHeight: 100
						}}
						placeholder="Message Inst"
						placeholderTextColor="#999"
						value={messageText}
						onChangeText={setMessageText}
						multiline
					/>
					<TouchableOpacity style={{ marginLeft: 10 }}>
						<Text style={{ fontSize: 16 }}>📎</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ marginLeft: 5 }}>
						<Text style={{ fontSize: 16 }}>🎤</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={{
						marginLeft: 10,
						width: 35,
						height: 35,
						borderRadius: 17.5,
						backgroundColor: '#2551A1',
						alignItems: 'center',
						justifyContent: 'center'
					}}
					onPress={sendMessage}
				>
					<Text style={{ color: '#FFFFFF', fontSize: 16 }}>→</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}