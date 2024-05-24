import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import { Appbar, Button } from "react-native-paper";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
const SingleProduct = () => {
	const router = useRouter();
	const { width, height } = Dimensions.get("window");
	const { id } = useLocalSearchParams();
	// console.log(id);
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
					title="Coffee Mocha"
					titleStyle={{ fontSize: 20, fontWeight: "800", color: "#140e03" }}
				/>
				<Ionicons name="heart" size={25} color="red" />
				{/* <Ionicons name="heart-outline" size={25} color="#140e03" /> */}
				{/* <Appbar.Action icon="heart" onPress={() => {}} /> */}
			</Appbar.Header>
			<ScrollView style={{ padding: 12 }}>
				<View
					style={{
						width: width,
						height: 200,
						// padding: 12,
					}}
				>
					<Image
						source={
							"https://images.unsplash.com/photo-1716093264767-7d818c805f7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						contentFit="cover"
						transition={1000}
						style={{ width: "100%", height: "100%", borderRadius: 10 }}
					/>
				</View>
				<View
					style={{
						// paddingHorizontal: 12,
						paddingVertical: 10,
						flex: 1,
						width: "100%",
						// backgroundColor: "red",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<View style={{ flex: 1, width: "50%", gap: 5 }}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "bold",
								color: "#140e03",
							}}
						>
							Coffee Mocha
						</Text>
						<Text
							style={{
								fontSize: 15,
								fontWeight: "normal",
								color: "#402c0b",
							}}
						>
							Coffee
						</Text>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "bold",
								color: "#140e03",
							}}
						>
							<Ionicons name="star-sharp" size={15} color="yellow" /> 4.8{" "}
							<Text style={{ color: "gray", fontWeight: "400", fontSize: 18 }}>
								(32)
							</Text>
						</Text>
					</View>
					<View
						style={{
							flex: 1,
							width: "50%",
							flexDirection: "row",
							alignItems: "flex-start",
							// backgroundColor: "green",
							justifyContent: "flex-end",
							gap: 25,
						}}
					>
						<Entypo name="drink" size={24} color="#402c0b" />
						<FontAwesome5 name="mug-hot" size={24} color="#402c0b" />
						<FontAwesome5 name="shipping-fast" size={24} color="#402c0b" />
					</View>
				</View>
				<View style={{ paddingVertical: 10, flex: 1, gap: 10 }}>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "#140e03",
						}}
					>
						Description
					</Text>
					<Text>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
						delectus quia quibusdam iusto expedita blanditiis aperiam eos
						voluptas minima voluptatem! Fugit quidem nobis eius perspiciatis
						reprehenderit praesentium animi, molestias facere? Laudantium dolor
						officia repudiandae rerum animi ex consequuntur sed similique
						debitis sapiente deleniti, voluptas hic voluptatibus culpa maxime
						itaque facilis aliquam. Mollitia omnis blanditiis libero rem itaque
						quam molestias consequatur. Voluptates tenetur porro fugiat sint et
						molestiae itaque voluptatum numquam ab nostrum quo totam perferendis
						reiciendis, nisi iure quaerat error omnis exercitationem officiis
						odio corporis! Impedit accusantium delectus reprehenderit
						consequuntur! Illum quas porro cumque culpa sint recusandae
						quibusdam, eius maxime, quidem omnis optio error minus, voluptatibus
						molestias. Unde omnis asperiores explicabo quam aliquam, laboriosam
						repellendus, quasi fuga debitis blanditiis tempora! Tenetur fugiat
						dolores qui, porro nobis exercitationem assumenda, consequatur
						repellendus minima, quidem quo atque explicabo reprehenderit
						deserunt! Placeat reprehenderit quo facere soluta quos ducimus
						nesciunt laborum, sed itaque repellat. Mollitia. Itaque molestiae in
						quisquam, suscipit dolores ex dolorum eveniet natus aliquid veniam
						dignissimos fuga, possimus ratione mollitia adipisci maxime quis
						molestias! Assumenda repellat accusantium id? Amet quos fuga ipsam
						autem. Facere temporibus sit iure? Modi rerum magni beatae
						praesentium officia, quibusdam omnis deserunt provident aliquam quod
						iste quidem corrupti error minus delectus, ad architecto ab,
						molestias tempore dolores neque? Inventore? Soluta possimus
						molestiae officiis ad facilis tempora amet molestias. Ad adipisci
						atque sequi corporis, repudiandae maiores. Quam, et fugit. Possimus
						corrupti odio illum, aliquid hic sequi suscipit voluptatem magnam
						perferendis! Dolorem beatae cupiditate officiis omnis odio,
						doloribus iste repellendus, accusamus ullam dicta mollitia laborum
						aliquid facere. Provident officiis quo eius, tempore dignissimos
						vitae recusandae corporis fuga eligendi, saepe corrupti vel. Quae
						quas corrupti autem odit praesentium maxime vero ad, inventore
						possimus alias perspiciatis impedit in distinctio atque nisi
						nesciunt, nostrum iure! Quia est ipsum consequuntur exercitationem
						reiciendis tempore temporibus impedit!
					</Text>
				</View>
				<View style={{ paddingVertical: 10, flex: 1, gap: 10 }}>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "#140e03",
						}}
					>
						Size
					</Text>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Button
							mode="contained"
							style={{ backgroundColor: "#402c0b" }}
							onPress={() => console.log("Pressed")}
						>
							S
						</Button>
						<Button
							mode="contained"
							style={{ backgroundColor: "#402c0b" }}
							onPress={() => console.log("Pressed")}
						>
							M
						</Button>
						<Button
							mode="contained"
							style={{ backgroundColor: "#402c0b" }}
							onPress={() => console.log("Pressed")}
						>
							L
						</Button>
					</View>
				</View>
				<View
					style={{ paddingBottom: 70, paddingVertical: 10, flex: 1, gap: 10 }}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "#140e03",
						}}
					>
						Price $43
					</Text>
					<Button mode="contained" style={{ backgroundColor: "#402c0b" }}>
						Buy now
					</Button>
				</View>
			</ScrollView>
		</LinearGradient>
	);
};

export default SingleProduct;
