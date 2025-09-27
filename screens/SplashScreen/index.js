import React, { useEffect } from "react";
import { SafeAreaView, View, ImageBackground, ScrollView, } from "react-native";

export default function SplashScreen({ navigation }) {
	
	useEffect(() => {
		// Navigate to Welcome screen after 3 seconds
		const timer = setTimeout(() => {
			navigation.navigate('Welcome');
		}, 3000);
		
		return () => clearTimeout(timer);
	}, [navigation]);

	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ImageBackground 
				source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/s0qj9zty_expires_30_days.png"}} 
				resizeMode = {'stretch'}
				style={{
					flex: 1,
				}}
				>
				<ScrollView  
					style={{
						flex: 1,
					}}>
				</ScrollView>
			</ImageBackground>
		</SafeAreaView>
	)
}