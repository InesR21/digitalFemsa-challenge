import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovementsContainer from "../components/MovementsContainer";
import productServise from "../api/product-service";
import TotalPointsCard from "../components/TotalPointsCard";
import { globalStyles } from "../utils/GlobalStyle";
import {
  getTotalPoints,
  getMovementsByis_redemptionTrue,
  getMovementsByis_redemptionFalse,
} from "../utils/index";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [productBackup, setProductBackup] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleFilterMovementsTrue = () => {
    const movements = getMovementsByis_redemptionTrue(productBackup);
    setProducts(movements);
  };

  const handleFilterMovementsFalse = () => {
    const movements = getMovementsByis_redemptionFalse(productBackup);
    setProducts(movements);
  };

  const handleMovementsAll = () => {
    setProducts(productBackup);
  };

  const fetchData = async () => {
    const data = await productServise.getProducts();
    setProducts(data.data);
    setProductBackup(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const total = getTotalPoints(productBackup);
    setTotalPoints(total);
  }, [productBackup]);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center text-lg h-screen">
        <Text style={globalStyles.text}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex flex-1 flex-col h-screen  bg-[#F8F8F8]">
      <View className="basis-[10%] px-4">
        <Header />
      </View>
      <View className="basis-[25%] px-4">
        <TotalPointsCard totalPoinst={totalPoints} />
      </View>
      <View className="basis-[55%] px-4">
        <Text
          style={globalStyles.text}
          className="text-gray-400 font-extrabold text-base"
        >
          TUS MOVIMIENTOS
        </Text>
        <MovementsContainer products={products} navigation={navigation} />
      </View>
      <View className="basis-[10%]">
        <Footer
          filterTrue={handleFilterMovementsTrue}
          filterFalse={handleFilterMovementsFalse}
          notFiltered={handleMovementsAll}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
