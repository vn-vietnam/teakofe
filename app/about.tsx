import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Appbar, List } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { Image } from "expo-image";
import { Octicons, Zocial } from "@expo/vector-icons";

const About = () => {
	const router = useRouter();

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
					title="Privacy Policy"
					titleStyle={{ fontSize: 20, fontWeight: "800", color: "#140e03" }}
				/>
			</Appbar.Header>

			<ScrollView
				style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20 }}
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
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>About author</Text>
				<Text
					style={{ fontSize: 14, fontWeight: "medium", paddingVertical: 5 }}
				>
					My name is Nguyen Trung Kien, I am currently live and work at HCM
					City, Viet Nam. I am a newbie developer and I really want to find a
					place to work. Contact me through these links in below.
				</Text>
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>Contact</Text>
				<View style={{ paddingVertical: 5, gap: 5, flexDirection: "row" }}>
					<Link
						style={{ textDecorationLine: "underline", fontStyle: "italic" }}
						href={"https://www.pleiku.site"}
					>
						<List.Item
							title="Gmail"
							left={(props) => <Zocial name="gmail" size={20} />}
						/>
					</Link>
					<Link
						style={{ textDecorationLine: "underline", fontStyle: "italic" }}
						href={"https://www.pleiku.site"}
					>
						<List.Item
							title="Linked"
							left={(props) => <Zocial name="linkedin"  size={20}/>}
						/>
					</Link>
					<Link
						style={{ textDecorationLine: "underline", fontStyle: "italic" }}
						href={"https://www.pleiku.site"}
					>
						<List.Item
							title="Phone"
							left={(props) => <Octicons name="number"  size={20}/>}
						/>
					</Link>
				</View>
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>
					You can see my Portfolio at{" "}
					<Link
						style={{ textDecorationLine: "underline", fontStyle: "italic" }}
						href={"https://www.pleiku.site"}
					>
						here
					</Link>
				</Text>
			</ScrollView>
		</LinearGradient>
	);
};

export default About;
