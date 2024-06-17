import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Appbar, Divider, List, Searchbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useFilterProductList, useSearchProduct } from "@/api/product";
import { Image } from "expo-image";

const Search = () => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = React.useState("");
	const {
		data: products,
		error,
		isLoading,
	}: any = useSearchProduct(searchQuery);
	// console.log(products);
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
					title="Search"
					titleStyle={{ fontSize: 20, fontWeight: "800", color: "#140e03" }}
				/>
			</Appbar.Header>
			<Searchbar
				style={{ backgroundColor: "#dfc59a" }}
				placeholder="Search ..."
				onChangeText={setSearchQuery}
				value={searchQuery}
				mode="view"
			/>
			<ScrollView style={{ flex: 1 }}>
				{products?.map((item: any) => (
					<View key={item.id}>
						<List.Item
							onPress={() => router.push("/home/" + item.id)}
							title={item.name + " - " + "$" + item.price}
							description={item.categories.name}
							left={(props) => (
								<Image
									source={{ uri: item.image }}
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
						/>
						<Divider bold={true} />
					</View>
				))}
			</ScrollView>
		</LinearGradient>
	);
};

export default Search;
