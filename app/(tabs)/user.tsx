import CarouselCard from "@/components/CarouselCard";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/provider/AuthProvider";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { Appbar, Button, Divider, Menu } from "react-native-paper";

export default function User() {
	const [active, setActive] = useState("");
	const { session, profile, setProfile, setSession }: any = useAuth();
	// console.log(profile);
	const { width, height } = Dimensions.get("window");
	const router = useRouter();
	return (
		<LinearGradient
			colors={["transparent", "#dfc59a", "#b77f1f"]}
			style={{
				flex: 1,
			}}
		>
			<Appbar.Header style={{ backgroundColor: "#dfc59a" }}>
				<Appbar.Content
					title="Me"
					titleStyle={{ fontSize: 20, fontWeight: "bold", color: "#140e03" }}
				/>
				{/* <Appbar.Action icon="magnify" /> */}
				{/* <Appbar.Action icon="cart-outline" /> */}
			</Appbar.Header>
			<ScrollView style={{}}>
				<View
					style={{
						width: width,
						height: 200,
						marginVertical: 20,
						flex: 1,
						// justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image
						source={require("@/assets/images/icon.png")}
						contentFit="cover"
						transition={1000}
						style={{ width: "50%", height: "100%", borderRadius: 100 }}
					/>
				</View>
				<View style={{ width: width, flex: 1, alignItems: "center", gap: 20 }}>
					{/* <Text style={{ fontSize: 20, fontWeight: "bold" }}>Kien Nguyen</Text> */}
					<Menu.Item
						leadingIcon="account-details-outline"
						onPress={() => router.push("/information")}
						title="Information User"
						style={{
							width: 200,
							backgroundColor: "#dfc59a",
							borderWidth: 1,
							borderColor: "#140e03",
							borderRadius: 10,
						}}
						titleStyle={{ color: "#140e03" }}
					/>

					<Menu.Item
						leadingIcon="cogs"
						onPress={() => router.push("/policy")}
						title="Privacy Policy"
						style={{
							width: 200,
							backgroundColor: "#dfc59a",
							borderWidth: 1,
							borderColor: "#140e03",
							borderRadius: 10,
						}}
						titleStyle={{ color: "#140e03" }}
					/>
					<Menu.Item
						leadingIcon="application"
						onPress={() => router.push("/about")}
						title="About app"
						style={{
							width: 200,
							backgroundColor: "#dfc59a",
							borderWidth: 1,
							borderColor: "#140e03",
							borderRadius: 10,
						}}
						titleStyle={{ color: "#140e03" }}
					/>
					<Menu.Item
						leadingIcon="logout"
						onPress={() => {
							supabase.auth.signOut();
							setSession(null);
							setProfile(null);
							router.replace("/login");
						}}
						title="Log out"
						style={{
							width: 200,
							backgroundColor: "#dfc59a",
							borderWidth: 1,
							borderColor: "#140e03",
							borderRadius: 10,
						}}
						titleStyle={{ color: "#140e03" }}
					/>
				</View>
			</ScrollView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: "#808080",
		bottom: -90,
		left: -35,
		position: "absolute",
	},
	titleContainer: {
		flexDirection: "row",
		gap: 8,
	},
});
