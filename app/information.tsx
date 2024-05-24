import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Appbar, Button, TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const Information = () => {
	const router = useRouter();
	const [text, setText] = React.useState("");
	return (
		<LinearGradient
			colors={["transparent", "#dfc59a", "#b77f1f"]}
			style={{
				flex: 1,
			}}
		>
			<Appbar.Header
				mode="center-aligned"
				style={{ backgroundColor: "#dfc59a" }}
			>
				<Appbar.BackAction onPress={() => router.back()} />
				<Appbar.Content
					title="User"
					titleStyle={{ fontSize: 20, fontWeight: "800", color: "#140e03" }}
				/>
			</Appbar.Header>

			<ScrollView
				style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20, gap: 10 }}
			>
				<Image
					source={require("@/assets/images/icon.png")}
					contentFit="cover"
					transition={1000}
					style={{
						width: 100,
						height: 100,
						borderRadius: 50,
						marginHorizontal: "auto",
					}}
				/>
				<TextInput
					mode="outlined"
					label="Your email"
					placeholder="Type something"
					right={<TextInput.Affix text="/100" />}
				/>
				<TextInput
					mode="outlined"
					label="Your address"
					placeholder="Type something"
					right={<TextInput.Affix text="/100" />}
				/>
				<TextInput
					mode="outlined"
					label="Your phone"
					placeholder="Type something"
					right={<TextInput.Affix text="/100" />}
				/>
				<Button
					// icon="camera"
					mode="contained"
					labelStyle={{ color: "#140e03" }}
					style={{ marginVertical: 10, backgroundColor: "#b77f1f" }}
					onPress={() => console.log("Pressed")}
				>
					Update
				</Button>
			</ScrollView>
		</LinearGradient>
	);
};

export default Information;
