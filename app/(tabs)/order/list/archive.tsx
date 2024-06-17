import OrderListItem from "@/components/OrderListItem";
import { LinearGradient } from "expo-linear-gradient";
import { Text, FlatList, ActivityIndicator } from "react-native";
import { PaperProvider } from "react-native-paper";
// import OrderListItem from "@/components/OrderListItem";
import { useAdminOrderList, useMyOrderList } from "@/api/orders";
import { useInsertOrderSubscription } from "@/api/orders/subcription";

export default function OrdersScreen() {
	const {
		data: orders,
		isLoading,
		error,
	} = useAdminOrderList({ archived: true });
	useInsertOrderSubscription();
	if (isLoading) {
		return <ActivityIndicator />;
	}
	if (error) {
		return <Text>Failed to fetch</Text>;
	}

	const title = "Accepted";

	return (
		<PaperProvider>
			<LinearGradient
				colors={["transparent", "#dfc59a", "#b77f1f"]}
				style={{ flex: 1 }}
			>
				<FlatList
					data={orders}
					renderItem={({ item }) => (
						<OrderListItem order={item} title={title} />
					)}
					contentContainerStyle={{
						gap: 10,
						paddingHorizontal: 10,
						marginTop: 10,
						paddingBottom: 70,
					}}
				/>
			</LinearGradient>
		</PaperProvider>
	);
}
