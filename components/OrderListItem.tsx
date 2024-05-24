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

const OrderListItem = ({ order, title }: any) => {
	const [visible, setVisible] = React.useState(false);
	const router = useRouter();
	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);
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
								onPress={() => console.log("Pressed")}
								style={{ borderWidth: 1, borderColor: "#140e03" }}
								labelStyle={{ color: "#140e03" }}
							>
								Proceed
							</Button>
						</View>
					</Dialog.Content>
				</Dialog>
			</Portal>
			<Card.Title
				title="#Order_01"
				subtitle="Card Subtitle"
				left={(props) => (
					<Avatar.Text
						{...props}
						label="01"
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
						{title === "new" ? (
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
						<Pressable
							onPress={() => router.push("order/23")}
							style={{
								padding: 10,
								backgroundColor: "#140e03",
								borderRadius: 30,
							}}
						>
							<Icon source="transfer-right" color="white" size={20} />
						</Pressable>
					</View>
				)}
			/>
		</>
	);
};

export default OrderListItem;
