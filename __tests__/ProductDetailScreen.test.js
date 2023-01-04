import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("ProductDetailScreen", () => {
  test("should render without data and navigate", async () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const component = render(<ProductDetailScreen navigation={navigation} />);
    expect(component).toBeDefined();
    expect(component.getByText("No hay datos para mostrar")).toBeDefined();
    expect(component.getByText("Volver")).toBeDefined();
    fireEvent.press(component.getByText("Volver"));
    expect(navigation.navigate).toHaveBeenCalledWith("Home");
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });
  test("should render with data and navigate", async () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const route = {
      params: {
        product: {
          image: "https://picsum.photos/200",
          product: "Producto",
          createdAt: "2021-09-30T20:00:00.000Z",
          points: 100,
          is_redemption: false,
        },
      },
    };
    const component = render(
      <NavigationContainer>
        <ProductDetailScreen navigation={navigation} route={route} />
      </NavigationContainer>
    );
    expect(component).toBeDefined();
    expect(component.getByText("Producto")).toBeDefined();
    expect(component.getByText("Detalles del producto")).toBeDefined();
    expect(
      component.getByText("Comprado el 30 de septiembre, 2021")
    ).toBeDefined();
    expect(component.getByText("Con esta compra acumulaste:")).toBeDefined();
    expect(component.getByText("100 puntos")).toBeDefined();
    expect(component.getAllByLabelText("Image product detail")).toBeDefined();
    expect(component.getByText("Aceptar")).toBeDefined();
    fireEvent.press(component.getByText("Aceptar"));
    expect(navigation.navigate).toHaveBeenCalledWith("Home");
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
