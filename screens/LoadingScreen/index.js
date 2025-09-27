import React, { useEffect } from "react";
import { SafeAreaView, View, ImageBackground, ScrollView, Text, ActivityIndicator } from "react-native";

export default function LoadingScreen({ navigation }) {
	
	useEffect(() => {
		// Navigate to Home screen after 2.5 seconds
		const timer = setTimeout(() => {
			navigation.navigate('Home');
		}, 2500);
		
		return () => clearTimeout(timer);
	}, [navigation]);

	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ImageBackground 
				source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/0t2l7ybn_expires_30_days.png"}} 
				resizeMode = {'stretch'}
				style={{
					flex: 1,
				}}
			>
				<View  
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<ActivityIndicator size="large" color="#2551A1" style={{ marginTop: 50 }} />
					<Text style={{
						color: "#2551A1",
						fontSize: 16,
						marginTop: 20,
						fontWeight: "600"
					}}>
						Loading...
					</Text>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}