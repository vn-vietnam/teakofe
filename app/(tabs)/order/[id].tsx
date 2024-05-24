import React, { useCallback, useRef } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Appbar, Button, Divider, List } from "react-native-paper";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Image } from "expo-image";

const SingleOrder = () => {
	const router = useRouter();
	const bottomSheetRef = useRef<BottomSheet>(null);

	// callbacks
	const handleSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
	}, []);

	const snapPoints = ["35%", "90%"]; // Define snap points here

	const ListItem = ({ title, description, size, price, onPress }: any) => (
		<>
			<List.Item
				title={title}
				description={description}
				onPress={onPress}
				left={(props) => <List.Icon {...props} icon="folder" />}
				right={() => (
					<View>
						<Text>Size: {size}</Text>
						<Text>Price: {price}</Text>
					</View>
				)}
			/>
			<Divider bold={true} />
		</>
	);

	return (
		<>
			<Appbar.Header
				mode="center-aligned"
				style={{ backgroundColor: "#dfc59a" }}
			>
				<Appbar.BackAction onPress={() => router.back()} />
				<Appbar.Content
					title="Order #01"
					titleStyle={{ fontSize: 20, fontWeight: "800", color: "#140e03" }}
				/>
			</Appbar.Header>

			<LinearGradient
				colors={["transparent", "#dfc59a", "#b77f1f"]}
				style={{ flex: 1 }}
			>
				<ScrollView style={{ flex: 1 }}>
					<ListItem
						title="First Item"
						description="Item description"
						size="M"
						price="$23"
						onPress={() => router.push("/home/12")}
					/>
					<ListItem
						title="Second Item"
						description="Item description"
						size="L"
						price="$25"
						onPress={() => router.push("/home/13")}
					/>
					<ListItem
						title="Second Item"
						description="Item description"
						size="L"
						price="$25"
						onPress={() => router.push("/home/13")}
					/>
					<ListItem
						title="Second Item"
						description="Item description"
						size="L"
						price="$25"
						onPress={() => router.push("/home/13")}
					/>
					<ListItem
						title="Second Item"
						description="Item description"
						size="L"
						price="$25"
						onPress={() => router.push("/home/13")}
					/>
					<ListItem
						title="Second Item"
						description="Item description"
						size="L"
						price="$25"
						onPress={() => router.push("/home/13")}
					/>
					<ListItem
						title="Second Item"
						description="Item description"
						size="L"
						price="$25"
						onPress={() => router.push("/home/13")}
					/>
					<ListItem
						title="Second Item"
						description="Item description"
						size="L"
						price="$25"
						onPress={() => router.push("/home/13")}
					/>
					<ListItem
						title="Second Item"
						description="Item description"
						size="L"
						price="$25"
						onPress={() => router.push("/home/13")}
					/>
					<ListItem
						title="Second Item"
						description="Item description"
						size="L"
						price="$25"
						onPress={() => router.push("/home/13")}
					/>
				</ScrollView>
				<GestureHandlerRootView style={{ height: 200 }}>
					<Image
						source={require("@/assets/images/icon.png")}
						contentFit="cover"
						transition={1000}
						style={{
							width: 100,
							height: 100,
							borderRadius: 50,
							marginHorizontal: "auto",
							marginTop: 25,
						}}
					/>
					<BottomSheet
						style={{ backgroundColor: "#865d17" }}
						handleStyle={{ backgroundColor: "#9c6c1a" }}
						ref={bottomSheetRef}
						snapPoints={snapPoints}
						onChange={handleSheetChanges}
					>
						<BottomSheetView
							style={{
								flex: 1,
								backgroundColor: "#dfc59a",
								justifyContent: "space-between",
								paddingVertical: 10,
								paddingHorizontal: 15,
								flexDirection: "row",
							}}
						>
							<View style={{ gap: 5 }}>
								<Text style={{}}>Items: $50</Text>
								<Text style={{}}>Ship: $54</Text>
								<Divider style={{ backgroundColor: "black" }} />
								<Text style={{}}>Total: $54</Text>
							</View>
							<View style={{ gap: 5 }}>
								<Text style={{ marginHorizontal: "auto", fontWeight: "bold" }}>
									Status
								</Text>
								<Button
									style={{ backgroundColor: "#402c0b" }}
									// icon="camera"
									mode="contained"
									onPress={() => console.log("Pressed")}
								>
									Loading
								</Button>
							</View>
						</BottomSheetView>
					</BottomSheet>
				</GestureHandlerRootView>
			</LinearGradient>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: "#d8ba86",
	},
});

export default SingleOrder;
