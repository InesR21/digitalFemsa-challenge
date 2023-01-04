import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import { getDate } from "../utils";

const ProductDetailScreen = ({ route, navigation }) => {
  if (!route || Object.keys(route.params).length === 0) {
    return (
      <SafeAreaView className="flex flex-1 flex-col h-screen bg-[#CFD6FF]">
        <View className="px-6 mt-10 mb-6">
          <Text className="font-extrabold text-2xl">
            No hay datos para mostrar
          </Text>
          <Button title="Volver" onPress={() => navigation.navigate("Home")} />
        </View>
      </SafeAreaView>
    );
  }

  const { image, product, createdAt, points, is_redemption } =
    route.params.productItem;
  const dateFormated = getDate(createdAt);

  return (
    <SafeAreaView className="flex flex-1 flex-col h-screen bg-[#CFD6FF]">
      <ScrollView>
        <View className="px-6 mt-12 mb-6">
          <Text className="font-extrabold text-2xl">{product}</Text>
        </View>
        <View className="bg-white h-screen ">
          <View
            style={{
              shadowColor: "#000",
              shadowOpacity: 0.5,
              shadowOffset: { width: 2, height: 5 },
            }}
            className="px-6 mt-10"
          >
            <Image
              source={{ uri: image }}
              className="w-full h-96 rounded-xl"
              accessibilityLabel="Image product detail"
            />
          </View>
          <View className="px-6 mt-10">
            <Text className="text-gray-400 font-bold text-base mb-5">
              Detalles del producto
            </Text>
            <Text className="font-extrabold text-lg mb-5">
              Comprado el {dateFormated}
            </Text>
            <Text className="text-gray-400 font-bold text-base mb-8">
              Con esta compra acumulaste:
            </Text>
            <Text className="font-extrabold text-2xl">{points} puntos</Text>
          </View>
          <View className="px-6 my-6 ">
            <View className="items-center">
              <View className=" w-full bg-blue-600 rounded-lg py-4 ">
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("Home")}
                >
                  <View>
                    <Text className="text-center test-xs font-extrabold text-white">
                      Aceptar
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
