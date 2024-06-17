import { View, Text, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Button, TextInput } from "react-native-paper";
import { Link, useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";

const Register = () => {
	const router = useRouter()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	async function signUpWithEmail() {
		setLoading(true);
		const { error } = await supabase.auth.signUp({ email, password });
		// const router = useRouter();
		if (error) {
			ToastAndroid.show(error.message, ToastAndroid.BOTTOM);
		} else {
			ToastAndroid.show("Register successfully", ToastAndroid.BOTTOM);
			router.push("/login");
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
					Register
				</Text>
				<TextInput
					mode="flat"
					label="Your email"
					placeholder="Type email"
					onChangeText={setEmail}
					style={{ backgroundColor: "#dfc59a" }}
					right={<TextInput.Affix text="/100" />}
				/>
				<TextInput
					style={{ backgroundColor: "#dfc59a" }}
					mode="flat"
					label="Your Password"
					onChangeText={setPassword}
					secureTextEntry
					placeholder="Type password"
					// right={<TextInput.Icon icon="eye" />}
				/>
				<Button
					// icon="camera"
					style={{ backgroundColor: "#dfc59a" }}
					labelStyle={{ color: "#140e03", fontWeight: "bold" }}
					mode="contained"
					// onPress={() => router.push('/login')}
					onPress={signUpWithEmail}
				>
					Register
				</Button>
				<Text style={{ color: "#dfc59a", textAlign: "center" }}>
					You don't have a account?
					<Link href={"/login"} style={{ textDecorationLine: "underline" }}>
						{" "}
						<Text>Login</Text>
					</Link>
				</Text>
			</View>
		</View>
	);
};

export default Register;
