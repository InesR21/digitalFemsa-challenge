import { View, Text } from "react-native";
import React from "react";
import TotalPointsCard from "./TotalPointsCard";

const TotalPointsContainer = ({ totalPoinst = 0 }) => {
  return (
    <View className=" flex-1">
      <Text className="text-gray-400 font-bold text-sm">TUS PUNTOS</Text>
      <View
        style={{
          shadowColor: "#000",
          shadowOpacity: 0.5,
          shadowOffset: { width: 0, height: 5 },
        }}
        className="basis-[70%] bg-blue-600 rounded-3xl mx-14 mt-6"
      >
        <TotalPointsCard totalPoinst={totalPoinst} />
      </View>
    </View>
  );
};

export default TotalPointsContainer;
