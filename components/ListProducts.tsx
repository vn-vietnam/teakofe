import { View, Text, FlatList } from "react-native";
import React from "react";
import { coffeeItems } from "@/constants";
import ProductListItem from "./ProductListItem";
import CarouselCard from "./CarouselCard";

const ListProducts = () => {
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={coffeeItems}
				renderItem={({ item, index }) => (
					<ProductListItem product={item} key={index} />
				)}
				numColumns={2}
				contentContainerStyle={{
					gap: 10,
					paddingHorizontal: 10,
					marginTop: 10,
					paddingBottom: 70,
				}}
				columnWrapperStyle={{ gap: 10 }}
			/>
		</View>
	);
};

export default ListProducts;
