import OrderListItem from "@/components/OrderListItem";
import { LinearGradient } from "expo-linear-gradient";
import { Text, FlatList, ActivityIndicator } from "react-native";
// import OrderListItem from "@/components/OrderListItem";
// import { useAdminOrderList, useMyOrderList } from "@/api/orders";
// import { useInsertOrderSubscription } from "@/api/orders/subcription";

export default function OrdersScreen() {
	// 	const {
	// 		data: orders,
	// 		isLoading,
	// 		error,
	// 	} = useAdminOrderList({ archived: false });
	//   useInsertOrderSubscription();
	// 	if (isLoading) {
	// 		return <ActivityIndicator />;
	// 	}
	// 	if (error) {
	// 		return <Text>Failed to fetch</Text>;
	// 	}
	const orderActive = [
		{
			id: 1,
			name: "df",
		},
		{
			id: 2,
			name: "df",
		},
		{
			id: 3,
			name: "df",
		},
		{
			id: 4,
			name: "df",
		},
	];
	const title = "new";
	return (
		<LinearGradient
			colors={["transparent", "#dfc59a", "#b77f1f"]}
			style={{ flex: 1 }}
		>
			<FlatList
				data={orderActive}
				renderItem={({ item }) => <OrderListItem order={item} title={title}/>}
				contentContainerStyle={{ gap: 10, padding: 10 }}
			/>
		</LinearGradient>
	);
}
