import { View, Text, Pressable } from "react-native";
import React from "react";
import {
	Avatar,
	Button,
	Card,
	Chip,
	Dialog,
	Icon,
	Modal,
	Portal,
} from "react-native-paper";
import { useRouter } from "expo-router";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { useDeleteOrder } from "@/api/orders";
import { useDeleteAllOrderSubcription } from "@/api/orders/subcription";
dayjs.extend(relativeTime);

const OrderListItem = ({ order, title }: any) => {
	const [visible, setVisible] = React.useState(false);
	const router = useRouter();
	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);
	// const { data, isLoading, error } = useDeleteOrder(order.id);
	const DeleteItem = () => {
		console.log("fd");
		useDeleteOrder(order.id);
		setVisible(false);
	};
	useDeleteAllOrderSubcription();
	return (
		<>
			<Portal>
				<Dialog
					visible={visible}
					onDismiss={hideModal}
					style={{ backgroundColor: "#dfc59a" }}
				>
					<Dialog.Icon icon="alert" size={30} color="red" />
					<Dialog.Title style={{ textAlign: "center" }}>
						Cancel Order
					</Dialog.Title>
					<Dialog.Content>
						<Text style={{ fontWeight: "bold" }}>
							Are you sure you want to cancel this order ?
						</Text>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "flex-end",
								alignItems: "center",
								gap: 10,
								marginTop: 30,
							}}
						>
							<Button
								mode="outlined"
								onPress={hideModal}
								style={{ borderWidth: 1, borderColor: "#140e03" }}
								labelStyle={{ color: "#140e03" }}
							>
								Cancel
							</Button>
							<Button
								mode="outlined"
								onPress={() => DeleteItem()}
								style={{ borderWidth: 1, borderColor: "#140e03" }}
								labelStyle={{ color: "#140e03" }}
							>
								Proceed
							</Button>
						</View>
					</Dialog.Content>
				</Dialog>
			</Portal>
			<Pressable onPress={() => router.push("order/" + order.id)}>
				<Card.Title
					title={"Order ID: #" + order.id}
					subtitle={order.status + " - " + dayjs(order.created_at).fromNow()}
					left={(props) => (
						<Avatar.Text
							{...props}
							label={order.id}
							style={{ backgroundColor: "#865d17" }}
						/>
					)}
					right={(props) => (
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								gap: 10,
							}}
						>
							{order.status === "New" ? (
								<>
									<Pressable
										onPress={showModal}
										style={{
											padding: 10,
											backgroundColor: "#865d17",
											borderRadius: 30,
										}}
									>
										<Icon source="trash-can-outline" color="white" size={20} />
									</Pressable>
								</>
							) : (
								<></>
							)}
							{/* <Pressable
								onPress={() => router.push("order/23")}
								style={{
									padding: 10,
									backgroundColor: "#140e03",
									borderRadius: 30,
								}}
							>
								<Icon source="transfer-right" color="white" size={20} />
							</Pressable> */}
						</View>
					)}
				/>
			</Pressable>
		</>
	);
};

export default OrderListItem;
