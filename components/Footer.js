import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";

const Footer = ({ filterTrue, filterFalse, notFiltered }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <View className="absolute top-0 inset-x-4 items-center">
      {isFiltered ? (
        <View className="w-full bg-blue-600 rounded-lg py-4 ">
          <TouchableWithoutFeedback
            onPress={() => {
              notFiltered();
              setIsFiltered(false);
            }}
          >
            <View>
              <Text className="text-center test-xs font-extrabold text-white">
                Todos
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      ) : null}

      {!isFiltered ? (
        <View className=" flex-row">
          <View className=" w-[48%] mr-[4%]  bg-blue-600 rounded-lg py-4">
            <TouchableWithoutFeedback
              onPress={() => {
                filterFalse();
                setIsFiltered(true);
              }}
            >
              <View>
                <Text className="text-center test-xs font-extrabold text-white">
                  Ganados
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View className=" w-[48%] bg-blue-600 rounded-lg py-4">
            <TouchableWithoutFeedback
              onPress={() => {
                filterTrue();
                setIsFiltered(true);
              }}
            >
              <View>
                <Text className="text-center test-xs font-extrabold text-white">
                  Canjeados
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Footer;
