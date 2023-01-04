import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { getDate } from "../utils";
import { globalStyles } from "../utils/GlobalStyle";
import {
  ChevronRightIcon,
  PlusSmallIcon,
  MinusSmallIcon,
} from "react-native-heroicons/mini";

const MovementItem = ({ productItem = {}, navigation }) => {
  if (!productItem || Object.keys(productItem).length === 0) return null;
  const { image, product, createdAt, points, is_redemption } = productItem;
  const dateFormated = getDate(createdAt);
  const isRedemptionIcon =
    is_redemption === true ? (
      <MinusSmallIcon testID="minus-icon" size={30} color="red" />
    ) : (
      <PlusSmallIcon testID="plus-icon" size={30} color="green" />
    );

  return (
    <TouchableWithoutFeedback
      testID="movement-item"
      onPress={() =>
        navigation.navigate("ProductDetail", {
          productItem,
        })
      }
    >
      <View className="flex-1 flex-row justify-between">
        <View className="basis-[20%] items-center justify-center">
          <Image
            accessibilityLabel="Image product item"
            source={{ uri: image }}
            className="w-full h-full rounded-xl"
          />
        </View>
        <View className="basis-[50%] px-4 justify-around ">
          <Text
            style={globalStyles.text}
            numberOfLines={1}
            className="font-bold text-sm"
          >
            {product}
          </Text>
          <Text style={globalStyles.text} numberOfLines={1} className="text-sm">
            {dateFormated}
          </Text>
        </View>
        <View className="basis-[30%] flex-1 flex-row justify-around items-center">
          {isRedemptionIcon}
          <Text style={globalStyles.text} className="font-bold text-base">
            {points}
          </Text>
          <ChevronRightIcon testID="chevron-icon" size={30} color="#000" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovementItem;
