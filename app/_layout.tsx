import AuthProvider, { useAuth } from "@/provider/AuthProvider";
import CartProvider from "@/provider/CartProvider";
import QueryProvider from "@/provider/QueryProvider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<AuthProvider>
			<QueryProvider>
				<CartProvider>
					<PaperProvider>
						<Stack>
							<Stack.Screen name="login" options={{ headerShown: false }} />
							<Stack.Screen name="register" options={{ headerShown: false }} />
							<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
							<Stack.Screen name="search" options={{ headerShown: false }} />
							{/* <Stack.Screen
					name="cart"
					options={{ headerShown: false, presentation: "modal" }}
				/> */}
							<Stack.Screen
								name="policy"
								options={{ headerShown: false, presentation: "modal" }}
							/>
							<Stack.Screen
								name="information"
								options={{ headerShown: false, presentation: "modal" }}
							/>
							<Stack.Screen
								name="about"
								options={{ headerShown: false, presentation: "modal" }}
							/>

							<Stack.Screen name="+not-found" />
						</Stack>
					</PaperProvider>
				</CartProvider>
			</QueryProvider>
		</AuthProvider>
	);
}
