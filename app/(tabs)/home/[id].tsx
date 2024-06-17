import { View, Text, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar, Button } from "react-native-paper";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useProduct } from "@/api/product";
import { useCart } from "@/provider/CartProvider";
const SingleProduct = () => {
	const router = useRouter();
	const { id: idString }: any = useLocalSearchParams();
	const { width, height } = Dimensions.get("window");
	const { data: product, error, isLoading }: any = useProduct(idString);
	// console.log(product);
	const [selectedSize, setSelectedSize] = useState<any>("M");
	const { addItem } = useCart();

	const addToCart = () => {
		if (!product) {
			return;
		}
		// console.log(product,selectedSize)
		addItem(product, selectedSize);
		router.push("/cart");
	};

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
					title={product?.name}
					titleStyle={{ fontSize: 20, fontWeight: "800", color: "#140e03" }}
				/>
				{/* <Ionicons name="heart" size={25} color={"red"} /> */}
			</Appbar.Header>
			<ScrollView style={{ padding: 12 }}>
				<View
					style={{
						width: width,
						height: 200,
						// padding: 12,
					}}
				>
					<Image
						source={{
							uri: product?.image,
						}}
						contentFit="cover"
						transition={1000}
						style={{ width: "100%", height: "100%", borderRadius: 10 }}
					/>
				</View>
				<View
					style={{
						paddingVertical: 10,
						flex: 1,
						width: "100%",

						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<View style={{ flex: 1, width: "50%", gap: 5 }}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "bold",
								color: "#140e03",
							}}
						>
							{product?.name}
						</Text>
						<Text
							style={{
								fontSize: 15,
								fontWeight: "normal",
								color: "#402c0b",
							}}
						>
							{product?.categories?.name}
						</Text>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "bold",
								color: "#140e03",
							}}
						>
							<Ionicons name="star-sharp" size={15} color="yellow" /> 4.8{" "}
							<Text style={{ color: "gray", fontWeight: "400", fontSize: 18 }}>
								(32)
							</Text>
						</Text>
					</View>
					<View
						style={{
							flex: 1,
							width: "50%",
							flexDirection: "row",
							alignItems: "flex-start",
							// backgroundColor: "green",
							justifyContent: "flex-end",
							gap: 25,
						}}
					>
						<Entypo name="drink" size={24} color="#402c0b" />
						<FontAwesome5 name="mug-hot" size={24} color="#402c0b" />
						<FontAwesome5 name="shipping-fast" size={24} color="#402c0b" />
					</View>
				</View>
				<View style={{ paddingVertical: 10, flex: 1, gap: 10 }}>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "#140e03",
						}}
					>
						Description
					</Text>
					<Text>{product?.description}</Text>
				</View>
				<View style={{ paddingVertical: 10, flex: 1, gap: 10 }}>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "#140e03",
						}}
					>
						Size
					</Text>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Button
							mode="contained"
							style={
								selectedSize === "S"
									? { backgroundColor: "red" }
									: { backgroundColor: "#402c0b" }
							}
							onPress={() => setSelectedSize("S")}
						>
							S
						</Button>
						<Button
							mode="contained"
							style={
								selectedSize === "M"
									? { backgroundColor: "red" }
									: { backgroundColor: "#402c0b" }
							}
							onPress={() => setSelectedSize("M")}
						>
							M
						</Button>
						<Button
							mode="contained"
							style={
								selectedSize === "L"
									? { backgroundColor: "red" }
									: { backgroundColor: "#402c0b" }
							}
							onPress={() => setSelectedSize("L")}
						>
							L
						</Button>
					</View>
				</View>
				<View
					style={{ paddingBottom: 70, paddingVertical: 10, flex: 1, gap: 10 }}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "#140e03",
						}}
					>
						Price {product?.price}
					</Text>
					<Button
						mode="contained"
						style={{ backgroundColor: "#402c0b" }}
						onPress={addToCart}
					>
						Buy now
					</Button>
				</View>
			</ScrollView>
		</LinearGradient>
	);
};

export default SingleProduct;
