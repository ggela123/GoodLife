import React, { useState, useRef } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ActivityIndicator, Image, PanResponder } from "react-native";
import Constants from 'expo-constants';
import * as onboardingStoreModule from '../../onboardingStore';
const onboardingStore = onboardingStoreModule && onboardingStoreModule.default ? onboardingStoreModule.default : onboardingStoreModule;

// Configure the proxy endpoint that will call Gemini server-side.
// Prefer expo.extra.GEMINI_PROXY_URL, then env var, then sensible local defaults for dev
const EXPO_EXTRA = Constants?.manifest?.extra || {};
const defaultLocal = Platform.OS === 'android' ? 'http://10.0.2.2:8000/chat' : 'http://localhost:8000/chat';
const GEMINI_PROXY_URL = EXPO_EXTRA.GEMINI_PROXY_URL || process.env.EXPO_PUBLIC_GEMINI_PROXY_URL || defaultLocal;

export default function AITravelAgentScreen({ navigation }) {
	const [messageText, setMessageText] = useState('');
	const [isPaused, setIsPaused] = useState(false);
	const [messages, setMessages] = useState([
		{ id: '1', text: 'Hello — ask me about destinations, opportunities, or visas.', sender: 'ai', time: timeNow() }
	]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const scrollRef = useRef(null);

	// Swipe gesture navigation
	const screenOrder = ['Home', 'AITravelAgent', 'Messages', 'Profile'];
	const currentScreenIndex = screenOrder.indexOf('AITravelAgent');

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
					// Swipe right from AITravelAgent - go to Home (backward)
					navigation.navigate('Home', { animate: true });
				} else {
					// Swipe left from AITravelAgent - go to Messages (forward)
					navigation.navigate('Messages', { animate: true });
				}
			}
		},
	});

	function timeNow() {
		const d = new Date();
		return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}

	async function sendMessage() {
		const prompt = (messageText || '').trim();
		if (!prompt) return;
		setError(null);

		// add user message locally immediately
		const userMsg = { id: String(Date.now()), text: prompt, sender: 'user', time: timeNow() };
		setMessages(prev => [...prev, userMsg]);
		setMessageText('');
		setLoading(true);

		try {
			// POST to your server-side proxy that makes requests to Gemini.
			const onboarding = onboardingStore.getOnboarding ? onboardingStore.getOnboarding() : {};
			const userId = (onboarding && onboarding.username) ? onboarding.username : 'app_user';
			const sessionId = (onboarding && onboarding.sessionId) ? onboarding.sessionId : 'app_session';

			const res = await fetch(GEMINI_PROXY_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ prompt, userId, sessionId })
			});

			if (!res.ok) {
				const text = await res.text();
				throw new Error(`Proxy error: ${res.status} ${text}`);
			}

			const payload = await res.json();
			// Server (ai-server/app.py) returns { reply: text }
			const aiText = (payload && (payload.reply || payload.text || payload.output)) || 'Sorry, I could not get a response.';

			const aiMsg = { id: String(Date.now() + 1), text: aiText, sender: 'ai', time: timeNow() };
			setMessages(prev => [...prev, aiMsg]);
			// scroll to bottom after slight delay
			setTimeout(() => scrollRef.current && scrollRef.current.scrollToEnd({ animated: true }), 200);
		} catch (e) {
			console.warn('AI proxy error', e);
			setError(e.message || String(e));
			const errMsg = { id: String(Date.now() + 2), text: `Error: ${e.message || 'Failed to get response'}`, sender: 'ai', time: timeNow() };
			setMessages(prev => [...prev, errMsg]);
		} finally {
			setLoading(false);
		}
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }} {...panResponder.panHandlers}>
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
				ref={scrollRef}
			>
				<View style={{ paddingVertical: 20 }}>
					{messages.map((message) => (
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

					{loading && (
						<View style={{ alignSelf: 'flex-start', marginVertical: 8 }}>
							<ActivityIndicator size="small" color="#2551A1" />
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
			{error ? (
				<View style={{ paddingHorizontal: 20, paddingVertical: 8 }}>
					<Text style={{ color: 'red' }}>{error}</Text>
				</View>
			) : null}

			{/* Bottom Navigation */}
			<View style={{
				backgroundColor: "#000000",
				paddingVertical: 12,
				paddingHorizontal: 20,
				borderTopWidth: 1,
				borderTopColor: "#333333",
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
							style={{ width: 24, height: 24, tintColor: '#666666' }}
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
							source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/ja0fjaox_expires_30_days.png" }} 
							resizeMode="stretch"
							style={{ width: 20, height: 20, tintColor: '#FFFFFF' }}
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
							style={{ width: 24, height: 24, tintColor: '#666666' }}
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
							style={{ width: 24, height: 24, tintColor: '#666666' }}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}