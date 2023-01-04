import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../utils/GlobalStyle";

const Footer = ({ filterTrue, filterFalse, notFiltered }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <View className="absolute top-0 inset-x-4 items-center">
      {isFiltered ? (
        <View className="w-full bg-blue-600 rounded-lg py-4 ">
          <TouchableWithoutFeedback
            testID="button-notFiltered"
            onPress={() => {
              notFiltered();
              setIsFiltered(false);
            }}
          >
            <View>
              <Text
                style={globalStyles.text}
                className="text-center test-xs font-extrabold text-white"
              >
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
              testID="button-filterFalse"
              onPress={() => {
                filterFalse();
                setIsFiltered(true);
              }}
            >
              <View>
                <Text
                  style={globalStyles.text}
                  className="text-center test-xs font-extrabold text-white"
                >
                  Ganados
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View className=" w-[48%] bg-blue-600 rounded-lg py-4">
            <TouchableWithoutFeedback
              testID="button-filterTrue"
              onPress={() => {
                filterTrue();
                setIsFiltered(true);
              }}
            >
              <View>
                <Text
                  style={globalStyles.text}
                  className="text-center test-xs font-extrabold text-white"
                >
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
