import { ScrollView, Text, View } from "react-native";
import React from "react";
import { Appbar, Button, Card, Divider, List } from "react-native-paper";

import { Image } from "expo-image";
import { coffeeItems } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSearchProduct } from "@/api/product";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "@/components/Loading";

const Favorite = () => {
	const router = useRouter();
	const { data: products, error, isLoading }: any = useSearchProduct("");

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
			<LinearGradient
				colors={["transparent", "#dfc59a", "#b77f1f"]}
				style={{
					flex: 1,
				}}
			>
				{/* <ScrollView style={{ marginBottom: 70 }}> */}
				<Loading />
				{/* </ScrollView> */}
			</LinearGradient>
		</>
	);
};

export default Favorite;
