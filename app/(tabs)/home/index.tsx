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
import { useAuth } from "@/provider/AuthProvider";
import { Banner } from "react-native-paper";
import { useCategoryList } from "@/api/category";
import { useFilterProductList, useProductList } from "@/api/product";

export default function HomeScreen() {
	const { profile }: any = useAuth();
	const [visible, setVisible] = useState(true);
	const [location, setLocation] = useState<any>(null);
	const router = useRouter();

	const [cate, setCate] = useState<any>(0);
	const { data: categories } = useCategoryList();
	const { data: products, error, isLoading }: any = useFilterProductList(cate);

	// location
	// const getLocation = async () => {
	// 	let { status } = await Location.requestForegroundPermissionsAsync();
	// 	if (status !== "granted") {
	// 		console.log("please accept location ");
	// 	}
	// 	let location = await Location.getCurrentPositionAsync({});
	// 	setLocation(location);
	// };
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
					title={"Hello, there 👋"}
					// "Hello, there 👋"
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
			{profile?.full_name ? (
				<></>
			) : (
				<Banner
					visible={visible}
					style={{ backgroundColor: "#402c0b" }}
					actions={[
						{
							label: "Update",
							onPress: () => router.navigate("/information"),
							textColor: "#dfc59a",
						},
					]}
					icon={({ size }) => (
						<Image
							source={require("@/assets/images/icon.png")}
							style={{
								width: size,
								height: size,
							}}
						/>
					)}
				>
					<Text style={{ color: "#dfc59a" }}>
						Please update your profile to order coffee!
					</Text>
				</Banner>
			)}

			<Categories category={categories} setCategory={setCate} cate={cate}/>
			<ListProducts products={products} setCategory={setCate} />
		</LinearGradient>
	);
}
