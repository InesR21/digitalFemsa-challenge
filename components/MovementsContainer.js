import { View, FlatList, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import MovementItem from "./MovementItem";

const MovementsContainer = ({ products = [], navigation }) => {
  const productItem = {
    id: "1",
    image: "https://picsum.photos/200",
    product: "Producto 1",
    createdAt: "2021-05-01",
    points: 100,
    is_redemption: false,
  };

  return (
    <View className="flex-1 bg-white my-4 rounded-xl py-6 px-3">
      {products?.length === 0 || products === undefined ? (
        <Text className="text-gray-400 font-extrabold text-base">
          No hay movimientos
        </Text>
      ) : null}
      <FlatList
        data={products}
        renderItem={({ item }) => {
          const productItem = {
            id: item.id,
            image: { uri: item.image },
            product: item.product,
            createdAt: item.createdAt,
            points: item.points,
            is_redemption: item.is_redemption,
          };
          return (
            <View className="h-14 w-full mb-3">
              <MovementItem
                key={item.id + item.createdAt}
                productItem={productItem}
                navigation={navigation}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MovementsContainer;
