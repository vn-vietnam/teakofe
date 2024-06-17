import { View, FlatList, RefreshControl } from "react-native";
import React from "react";

import ProductListItem from "./ProductListItem";

const ListProducts = ({ products, setCategory }: any) => {
	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		setCategory(0);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, []);
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
				data={products}
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
