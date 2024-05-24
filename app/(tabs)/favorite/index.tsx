import { ScrollView, View } from "react-native";
import React from "react";
import { Appbar, Button, Card } from "react-native-paper";

import { Image } from "expo-image";
import { coffeeItems } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Favorite = () => {
	const router = useRouter();
	return (
		<>
			<Appbar.Header
				mode="center-aligned"
				style={{ backgroundColor: "#dfc59a" }}
			>
				<Appbar.Content
					title="Favorite ❤"
					titleStyle={{ fontSize: 20, fontWeight: "800", color: "#140e03" }}
				/>
			</Appbar.Header>
			<LinearGradient colors={["transparent", "#dfc59a", "#b77f1f"]}>
				<ScrollView style={{ marginBottom: 70 }}>
					{coffeeItems.map((item, index) => (
						<Card.Title
							key={index}
							style={{
								borderBottomWidth: 1,
							}}
							titleStyle={{
								fontWeight: "bold",
								color: "#140e03",
							}}
							subtitleStyle={{
								fontWeight: "bold",
								color: "#b77f1f",
							}}
							title={item.name}
							subtitle={item.type}
							left={() => (
								<Image
									source={item.image}
									contentFit="cover"
									transition={1000}
									style={{ width: "100%", height: "100%", borderRadius: 50 }}
								/>
							)}
							right={() => (
								<View
									style={{
										flex: 1,
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										marginRight: 10,
									}}
								>
									<Button
										mode="text"
										labelStyle={{
											color: "#140e03",
											textDecorationLine: "underline",
										}}
										onPress={() => console.log("j")}
									>
										Delete
									</Button>

									<Button
										// icon="arrow-right-bold"
										style={{borderColor: '#140e03'}}
										mode="outlined"
										labelStyle={{ color: "#140e03" }}
										onPress={() => router.push(`/home/${item.id}`)}
									>
										View
									</Button>
								</View>
							)}
						/>
					))}
				</ScrollView>
			</LinearGradient>
		</>
	);
};

export default Favorite;
