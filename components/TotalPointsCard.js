import { View, Text } from "react-native";
import React from "react";

const TotalPointsCard = ({ totalPoinst }) => {
  const poinst = totalPoinst.toLocaleString("es-ES");

  return (
    <View className="m-6">
      <Text className="text-white font-extrabold text-base">Diciembre</Text>
      <Text className="my-4 px-5 text-white font-extrabold text-3xl">
        {poinst} pts
      </Text>
    </View>
  );
};

export default TotalPointsCard;
