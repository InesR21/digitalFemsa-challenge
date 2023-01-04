import { View, FlatList, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import MovementItem from "./MovementItem";

const MovementsContainer = ({ products = [], navigation }) => {
  return (
    <View className="flex-1 bg-white my-4 rounded-xl py-6 px-3">
      {products?.length === 0 || products === undefined ? (
        <Text className="text-gray-400 font-extrabold text-base">
          No hay movimientos
        </Text>
      ) : null}
      <FlatList
        testID="flatlist-movements"
        data={products}
        renderItem={({ item }) => {
          return (
            <View className="h-14 w-full mb-3">
              <MovementItem
                testID="movement-item"
                key={item.id + item.createdAt}
                productItem={item}
                navigation={navigation}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MovementsContainer;
