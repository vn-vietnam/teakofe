import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { categories } from "@/constants";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const Categories = () => {
	const [activeCategory, setActiveCategory] = useState(1);

	return (
		<LinearGradient
			colors={[ "#dfc59a", '#d0ac6d']}
			style={{ paddingVertical: 12 }}
		>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={categories}
				contentContainerStyle={{
					paddingHorizontal: 12,
					// flex: 1,
					gap: 10,
				}}
				keyExtractor={(item: any) => item.id}
				renderItem={({ item }) => {
					const isActive = item.id == activeCategory;
					let activeTextClass = isActive ? "#dfc59a" : "#140e03";
					return (
						<Button
							onPress={() => setActiveCategory(item.id)}
							style={{
								shadowColor: "black",
								shadowOpacity: 2,
								shadowRadius: 10,
								backgroundColor: isActive ? "#140e03" : "#dfc59a",
								borderColor: '#140e03',
								borderWidth: 1
							}}
						>
							<Text
								style={{
									color: activeTextClass,
								}}
							>
								{item.title}
							</Text>
						</Button>
					);
				}}
			/>
		</LinearGradient>
	);
};

export default Categories;
