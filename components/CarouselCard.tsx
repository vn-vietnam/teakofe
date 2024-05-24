import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import Animated, {
	interpolate,
	interpolateColor,
	useAnimatedStyle,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SBItem } from "./SBItem";
import SButton from "./SButton";
import { Image } from "expo-image";
import { coffeeItems } from "@/constants";

const ElementsText = {
	AUTOPLAY: "AutoPlay",
};
interface ItemProps {
	item: any;
	index: number;
	animationValue: Animated.SharedValue<number>;
}
const CustomItem: React.FC<ItemProps> = ({ index, animationValue, item }) => {
	return (
		<View style={{}}>
			<Image
				source={item.image}
				contentFit="cover"
				// transition={1000}
				style={{ width: "100%", height: "100%" }}
			/>
		</View>
	);
};
function CarouselCard() {
	const { width, height } = Dimensions.get("window");
	return (
		<Carousel
			loop={true}
			autoPlay={true}
			style={{
				width: width,
				height: 180,
			}}
			width={width}
			data={coffeeItems}
			renderItem={({ index, animationValue, item }) => {
				return (
					<CustomItem
						item={item}
						key={index}
						index={index}
						animationValue={animationValue}
					/>
				);
			}}
			scrollAnimationDuration={1200}
		/>
	);
}

export default CarouselCard;
