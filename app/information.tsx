import { View, Text, ScrollView, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar, Button, List, TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useAuth } from "@/provider/AuthProvider";
import { useUpdateProfiles } from "@/api/profile";
import { supabase } from "@/lib/supabase";

const Information = () => {
	const router = useRouter();
	const [text, setText] = React.useState("");
	const { session, profile, setProfile, setSession }: any = useAuth();
	const [openUpdate, setOpenUpdate] = useState(false);
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [address, setAdress] = useState("");
	const [phone, setPhone] = useState("");
	const [errors, setErrors] = useState("");
	const { mutate: updateProfile } = useUpdateProfiles();

	// console.log(profile.email);
	const validateInput = () => {
		setErrors("");
		if (!name) {
			setErrors("Name is required");
			return false;
		}
		if (!address) {
			setErrors("Address is required");
			return false;
		}
		if (!phone) {
			setErrors("Phone is required");
			return false;
		}
		if (!email) {
			setErrors("Email is required");
			return false;
		}
		return true;
	};
	const submitUpdate = async () => {
		if (!validateInput()) {
			return;
		}
		updateProfile(
			{ id: profile?.id, full_name: name, email, address, phone },
			{
				onSuccess: async () => {
					// console.log("success");
					ToastAndroid.show("Update successfully", ToastAndroid.BOTTOM);
					await supabase.auth.signOut();
					setProfile(null);
					router.replace("/");
				},
			}
		);
	};
	useEffect(() => {
		if (profile) {
			setName(profile?.full_name);
			setAdress(profile?.address);
			setPhone(profile?.phone?.toString());
			setEmail(profile?.email);
		}
	}, [profile]);
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
					title="User"
					titleStyle={{ fontSize: 20, fontWeight: "800", color: "#140e03" }}
				/>
			</Appbar.Header>

			<ScrollView
				style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20, gap: 10 }}
			>
				<Image
					source={require("@/assets/images/icon.png")}
					contentFit="cover"
					transition={1000}
					style={{
						width: 100,
						height: 100,
						borderRadius: 50,
						marginHorizontal: "auto",
					}}
				/>
				{!openUpdate ? (
					<>
						<List.Item
							title={profile?.full_name || "please update"}
							left={(props) => <List.Icon {...props} icon="account" />}
						/>
						<List.Item
							title={profile?.phone || "please update"}
							left={(props) => <List.Icon {...props} icon="cellphone-dock" />}
						/>
						<List.Item
							title={profile?.address || "please update"}
							left={(props) => <List.Icon {...props} icon="home-circle" />}
						/>
						<List.Item
							title={profile?.email || "please update"}
							left={(props) => (
								<List.Icon {...props} icon="email-open-multiple-outline" />
							)}
						/>
						<Button
							// icon="camera"
							mode="contained"
							labelStyle={{ color: "#140e03" }}
							style={{ marginVertical: 10, backgroundColor: "#b77f1f" }}
							onPress={() => setOpenUpdate(!openUpdate)}
						>
							Update
						</Button>
					</>
				) : (
					<>
						<TextInput
							mode="outlined"
							label="Your Name"
							placeholder="Type something"
							value={name}
							onChangeText={setName}
							// right={<TextInput.Affix text="/100" />}
						/>
						<TextInput
							mode="outlined"
							label="Your email"
							onChangeText={setEmail}
							value={email}
							placeholder="Type something"
							// right={<TextInput.Affix text="/100" />}
						/>
						<TextInput
							mode="outlined"
							value={address}
							label="Your address"
							onChangeText={setAdress}
							placeholder="Type something"
							// right={<TextInput.Affix text="/100" />}
						/>
						<TextInput
							mode="outlined"
							value={phone}
							label="Your phone"
							onChangeText={setPhone}
							placeholder="Type something"
							keyboardType="numeric"
							// right={<TextInput.Affix text="/100" />}
						/>
						<Text style={{ color: "red", margin: "auto", paddingVertical: 10 }}>
							{errors}
						</Text>
						<Button
							// icon="camera"
							mode="contained"
							labelStyle={{ color: "#140e03" }}
							style={{ marginVertical: 10, backgroundColor: "#b77f1f" }}
							onPress={submitUpdate}
						>
							Update
						</Button>
					</>
				)}
			</ScrollView>
		</LinearGradient>
	);
};

export default Information;
