import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Appbar, Divider, List, Searchbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Search = () => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = React.useState("");
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
					title="Search"
					titleStyle={{ fontSize: 20, fontWeight: "800", color: "#140e03" }}
				/>
			</Appbar.Header>
			<Searchbar
				style={{ backgroundColor: "#dfc59a" }}
				placeholder="Search"
				onChangeText={setSearchQuery}
				value={searchQuery}
				mode="view"
			/>
			<ScrollView style={{ flex: 1 }}>
				<List.Item
					onPress={() => router.push("/home/12")}
					title="First Item"
					description="Item description"
					left={(props) => <List.Icon {...props} icon="folder" />}
				/>
				<Divider bold={true}/>
				<List.Item
					title="First Item"
					onPress={() => router.push("/home/12")}
					description="Item description"
					left={(props) => <List.Icon {...props} icon="folder" />}
				/>
			</ScrollView>
		</LinearGradient>
	);
};

export default Search;
