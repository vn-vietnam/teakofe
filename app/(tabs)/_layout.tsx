import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { BlurView } from "expo-blur";
export default function TabLayout() {
	return (
		<Tabs
			screenOptions={() => ({
				tabBarActiveTintColor: "#865d17",
				headerShown: false,
				tabBarShowLabel: false,

				tabBarBackground: () => (
					<BlurView
						tint={"default"}
						intensity={100}
						style={{
							flex: 1,
							backgroundColor: "#b77f1f",
						}}
					/>
				),

				tabBarStyle: {
					backgroundColor: "transparent",
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					elevation: 0,
				},
			})}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "home" : "home-outline"}
							color="#140e03"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="favorite"
				options={{
					title: "Favorite",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "heart" : "heart-outline"}
							color="#140e03"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="order"
				options={{
					title: "Order",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "list-circle" : "list-circle-outline"}
							color="#140e03"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="user"
				options={{
					title: "User",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "person-circle" : "person-circle-outline"}
							color="#140e03"
						/>
					),
				}}
			/>

			<Tabs.Screen name="index" options={{ href: null }} />
			<Tabs.Screen name="cart" options={{ href: null }} />
		</Tabs>
	);
}
