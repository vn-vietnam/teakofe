import { View, Text, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Button, TextInput } from "react-native-paper";
import { Link, Redirect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/provider/AuthProvider";

const Login = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const { session } = useAuth();
	// console.log(session);
	if (session) {
		return <Redirect href="/(tabs)" />;
	}

	async function signInWithEmail() {
		setLoading(true);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			ToastAndroid.show(error.message, ToastAndroid.BOTTOM);
		} else {
			ToastAndroid.show("Login successfully", ToastAndroid.BOTTOM);
			router.push("/(tabs)");
		}
		setLoading(false);
	}
	return (
		<View style={{ flex: 1, backgroundColor: "#402c0b" }}>
			<Image
				source={require("@/assets/images/icon.png")}
				contentFit="cover"
				transition={1000}
				style={{
					width: 200,
					height: 200,
					borderRadius: 200,
					marginHorizontal: "auto",
					marginTop: 100,
				}}
			/>
			<View
				style={{
					// flex: 1,
					justifyContent: "center",
					gap: 10,
					paddingHorizontal: 15,
					paddingVertical: 50,
				}}
			>
				<Text style={{ fontSize: 25, fontWeight: "bold", color: "#dfc59a" }}>
					Login
				</Text>
				<TextInput
					mode="flat"
					label="Your email"
					onChangeText={setEmail}
					placeholder="Type email"
					style={{ backgroundColor: "#dfc59a" }}
					// right={<TextInput.Affix text="/100" />}
				/>
				<TextInput
					style={{ backgroundColor: "#dfc59a" }}
					mode="flat"
					label="Your Password"
					// contentStyle={{backgroundColor: 'red'}}
					onChangeText={setPassword}
					secureTextEntry
					placeholder="Type password"
					// right={<TextInput.Affix text="/100" />}
				/>
				<Button
					// icon="camera"
					onPress={signInWithEmail}
					style={{ backgroundColor: "#dfc59a" }}
					labelStyle={{ color: "#140e03", fontWeight: "bold" }}
					mode="contained"
					// onPress={() => router.push("/(tabs)")}
				>
					Login
				</Button>
				<Text style={{ color: "#dfc59a", textAlign: "center" }}>
					You don't have a account?
					<Link href={"/register"} style={{ textDecorationLine: "underline" }}>
						{" "}
						<Text>Register</Text>
					</Link>
				</Text>
			</View>
		</View>
	);
};

export default Login;
