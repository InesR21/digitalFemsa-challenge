import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { getDate } from "../utils";
import {
  ChevronRightIcon,
  PlusSmallIcon,
  MinusSmallIcon,
} from "react-native-heroicons/mini";

const MovementItem = ({ productItem, navigation }) => {
  const { image, product, createdAt, points, is_redemption } = productItem;
  const dateFormated = getDate(createdAt);
  const isRedemptionIcon =
    is_redemption === true ? (
      <MinusSmallIcon size={30} color="red" />
    ) : (
      <PlusSmallIcon size={30} color="green" />
    );

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("ProductDetail", {
          product: {
            image,
            product,
            createdAt,
            points,
            is_redemption,
          },
        })
      }
    >
      <View className="flex-1 flex-row justify-between">
        <View className="basis-[20%] items-center justify-center">
          <Image source={image} className="w-full h-full rounded-xl" />
        </View>
        <View className="basis-[50%] px-4 justify-around ">
          <Text className="font-bold text-sm">{product}</Text>
          <Text className="text-sm">{dateFormated}</Text>
        </View>
        <View className="basis-[30%] flex-1 flex-row justify-around items-center">
          {isRedemptionIcon}
          <Text className="font-bold text-base">{points}</Text>
          <ChevronRightIcon size={30} color="#000" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovementItem;
