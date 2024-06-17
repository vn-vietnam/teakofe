import { View, Text, ScrollView, ToastAndroid } from "react-native";
import React from "react";
import { Appbar, Button, Divider, List } from "react-native-paper";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useCart } from "@/provider/CartProvider";
import { Image } from "expo-image";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "@/provider/AuthProvider";
import CartEmpty from "@/components/CartEmpty";

const Cart = () => {
	const router = useRouter();
	const { items, total, checkout, updateQuantity } = useCart();
	const { session, profile, setProfile }: any = useAuth();
	const checkFinish = () => {
		if (!profile.email || !profile.phone || !profile.address) {
			ToastAndroid.show("Please update profile", ToastAndroid.BOTTOM);
		} else {
			if (total === 0) {
				ToastAndroid.show("Please select drink!", ToastAndroid.BOTTOM);
			} else {
				ToastAndroid.show("Successfully!", ToastAndroid.BOTTOM);
				checkout();
			}
		}
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
					title="Cart"
					titleStyle={{ fontSize: 20, fontWeight: "800", color: "#140e03" }}
				/>
			</Appbar.Header>

			{items.length > 0 ? (
				<ScrollView
					style={{ flex: 1 }}
					contentContainerStyle={{
						justifyContent: "space-between",
						flexDirection: "column",
					}}
				>
					{items?.map((item: any) => (
						<View key={item?.id}>
							<List.Item
								// onPress={() => router.push("/home/12")}
								title={item?.product?.name}
								description={
									"$" + item?.product?.price + " - Size " + item?.size
								}
								left={(props) => (
									<Image
										source={{ uri: item?.product?.image }}
										contentFit="cover"
										transition={1000}
										style={{
											width: 50,
											height: 50,
											borderRadius: 50,
											marginHorizontal: 10,
										}}
									/>
								)}
								right={(props) => (
									<View
										style={{
											flexDirection: "row",
											gap: 10,
											alignItems: "center",
											marginVertical: 10,
										}}
									>
										<FontAwesome
											onPress={() => updateQuantity(item?.id, -1)}
											name="minus"
											color="gray"
											style={{ padding: 5 }}
										/>

										<Text style={{ fontWeight: "500", fontSize: 18 }}>
											{item?.quantity}
										</Text>
										<FontAwesome
											onPress={() => updateQuantity(item?.id, 1)}
											name="plus"
											color="gray"
											style={{ padding: 5 }}
										/>
									</View>
								)}
							/>
							<Divider bold={true} style={{ backgroundColor: "black" }} />
						</View>
					))}
				</ScrollView>
			) : (
				<CartEmpty />
			)}
			<View
				style={{
					paddingBottom: 70,
				}}
			>
				<Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
					Total: ${total.toFixed(2)}
				</Text>
				<Button
					mode="contained"
					style={{ backgroundColor: "#402c0b" }}
					onPress={checkFinish}
					// onPress={addToCart}
				>
					Check out
				</Button>
			</View>
		</LinearGradient>
	);
};

export default Cart;

// text="Checkout" // onPress={checkFinish}
