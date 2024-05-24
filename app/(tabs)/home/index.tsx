import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
	Dimensions,
	FlatList,
	Image,
	Pressable,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { useState } from "react";
import { categories } from "@/constants";
import { Appbar, Badge, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import Categories from "@/components/Categories";
import { HelloWave } from "@/components/HelloWave";
import CarouselCard from "@/components/CarouselCard";
import ListProducts from "@/components/ListProducts";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
	const { width, height } = Dimensions.get("window");
	const [location, setLocation] = useState<any>(null);
	const router = useRouter();
	const getLocation = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			console.log("please accept location ");
		}
		let location = await Location.getCurrentPositionAsync({});
		setLocation(location);
	};
	// console.log(location);
	const Cart = () => {
		router.push("cart");
	};
	const Search = () => {
		router.push("search");
	};
	return (
		<LinearGradient
			colors={["transparent", "#dfc59a", "#b77f1f"]}
			style={{
				flex: 1,
			}}
		>
			<Appbar.Header style={{ backgroundColor: "#dfc59a" }}>
				<Appbar.Content
					title="Hello, there 👋"
					titleStyle={{ fontSize: 20, fontWeight: "bold", color: "#140e03" }}
				/>
				<Appbar.Action
					icon="magnify"
					onPress={Search}
					color="#140e03"
					style={{
						borderRadius: 20,
						borderWidth: 1,
						borderColor: "#140e03",
						padding: 10,
					}}
				/>
				<Appbar.Action
					icon="cart-outline"
					onPress={Cart}
					color="#140e03"
					style={{
						borderRadius: 20,
						borderWidth: 1,
						borderColor: "#140e03",
						padding: 10,
					}}
				/>
			</Appbar.Header>
			{/* <View style={{}}>
				<CarouselCard />
			</View> */}
			<Categories />
			<ListProducts />
		</LinearGradient>
	);
}
