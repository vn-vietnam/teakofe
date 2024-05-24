import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { Link, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

const Policy = () => {
	const router = useRouter();

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
					title="Privacy Policy"
					titleStyle={{ fontSize: 20, fontWeight: "800", color: "#140e03" }}
				/>
			</Appbar.Header>

			<ScrollView
				style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20 }}
			>
				<Image
					source={require('@/assets/images/icon.png')}
					contentFit="cover"
					transition={1000}
					style={{
						width: 100,
						height: 100,
						borderRadius: 50,
						marginHorizontal: "auto",
					}}
				/>
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>Privacy Policy</Text>
				<Text
					style={{ fontSize: 14, fontWeight: "medium", paddingVertical: 5 }}
				>
					This privacy policy applies to the Love Art app (hereby referred to as
					"Application") for mobile devices that was created by Kien Nguyen
					(hereby referred to as "Service Provider") as a Free service. This
					service is intended for use "AS IS".
				</Text>
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>
					Information Collection and Use
				</Text>
				<View style={{ paddingVertical: 5, gap: 5 }}>
					<Text>
						The Application collects information when you download and use it.
						This information may include information such as:
					</Text>
					<View>
						<Text style={{ fontStyle: "italic", paddingLeft: 10 }}>
							Your device's Internet Protocol address (e.g. IP address)
						</Text>
						<Text style={{ fontStyle: "italic", paddingLeft: 10 }}>
							The pages of the Application that you visit, the time and date of
							your visit, the time spent on those pages
						</Text>
						<Text style={{ fontStyle: "italic", paddingLeft: 10 }}>
							The time spent on the Application The operating system you use on
							your mobile device
						</Text>
						<Text style={{ fontStyle: "italic", paddingLeft: 10 }}>
							The Application does not gather precise information about the
							location of your mobile device.
						</Text>
					</View>
					<Text>
						The Service Provider may use the information you provided to contact
						you from time to time to provide you with important information,
						required notices and marketing promotions.
					</Text>
					<Text>
						For a better experience, while using the Application, the Service
						Provider may require you to provide us with certain personally
						identifiable information.
					</Text>
					<Text>
						The information that the Service Provider request will be retained
						by them and used as described in this privacy policy.
					</Text>
				</View>
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>
					You can see full policy at{" "}
					<Link
						style={{ textDecorationLine: "underline", fontStyle: "italic" }}
						href={"https://sites.google.com/view/love-art-privacy-policy"}
					>
						Policy App
					</Link>
				</Text>
			</ScrollView>
		</LinearGradient>
	);
};

export default Policy;
