import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Link } from "expo-router";

const ProductListItem = ({ product }: any) => {
	// console.log(product);
	return (
		<Link href={`/home/${product.id}`} asChild>
			<Pressable style={styles.container}>
				<Image
					source={product.image}
					contentFit="cover"
					transition={500}
					style={{ width: "100%", height: 100, borderRadius: 10 }}
				/>
				<View
					style={{
						flex: 1,
						justifyContent: "space-between",
						flexDirection: "column",
					}}
				>
					<Text style={styles.title}>{product.name}</Text>
					<View
						style={{
							flex: 1,

							justifyContent: "space-between",
							flexDirection: "row",
							alignItems: "flex-end",
						}}
					>
						<Text style={styles.type}>{product.type}</Text>
						<Text style={styles.price}>${product.price}</Text>
					</View>
				</View>
			</Pressable>
		</Link>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#402c0b",
		padding: 10,
		borderRadius: 20,
		flex: 1,
		maxWidth: "50%",
	},

	image: {
		width: "100%",
		aspectRatio: 1.5,
		borderRadius: 10,
	},

	title: {
		fontSize: 16,
		fontWeight: "600",
		color: "#dfc59a",
		marginVertical: 10,
	},
	type: {
		color: "#b77f1f",
	},
	price: {
		fontWeight: "bold",
		color: "#dfc59a",
	},
});
export default ProductListItem;
