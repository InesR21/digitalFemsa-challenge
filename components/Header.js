import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../utils/GlobalStyle";

const Header = () => {
  return (
    <View className=" flex space-y-2 mt-1">
      <Text style={globalStyles.text} className="font-extrabold text-xl">
        Bienvenido de vuelta!
      </Text>
      <Text style={globalStyles.text} className="text-base">
        Ruben Rodriguez
      </Text>
    </View>
  );
};

export default Header;
