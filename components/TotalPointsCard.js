import { View, Text } from "react-native";
import React from "react";

const TotalPointsCard = ({ totalPoinst = 0 }) => {
  const poinst = totalPoinst.toLocaleString("es-ES");
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
        <View className="m-6">
          <Text className="text-white font-extrabold text-base">Diciembre</Text>
          <Text className="my-4 px-5 text-white font-extrabold text-3xl">
            {poinst} pts
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TotalPointsCard;
