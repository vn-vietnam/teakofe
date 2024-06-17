import { View, StyleSheet } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

const CartEmpty = () => {
	const animation = useRef(null);
	const router = useRouter();

	return (
		<View style={styles.animationContainer}>
			<LottieView
				autoPlay
				ref={animation}
				style={{
					width: "50%",
					height: "50%",
					// backgroundColor: "#eee",
				}}
				// Find more Lottie files at https://lottiefiles.com/featured
				source={require("@/assets/animations/Aniki Hamster.json")}
			/>
			<Button
				icon="shopping"
				mode="contained"
				style={{ backgroundColor: "#402c0b" }}
				onPress={() => router.push("/home")}
			>
				Buy Now
			</Button>
		</View>
	);
};
const styles = StyleSheet.create({
	animationContainer: {
		// backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	buttonContainer: {
		paddingTop: 20,
	},
});
export default CartEmpty;
