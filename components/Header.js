import { View, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className=" flex space-y-2 mt-1">
      <Text className="font-extrabold text-xl">Bienvenido de vuelta!</Text>
      <Text className="text-base">Ruben Rodriguez</Text>
    </View>
  );
};

export default Header;
