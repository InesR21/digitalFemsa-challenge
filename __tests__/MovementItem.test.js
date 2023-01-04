import React from "react";

import { render, fireEvent } from "@testing-library/react-native";

import MovementItem from "../components/MovementItem";

describe("MovementItem", () => {
  test("should render is_redemption false", () => {
    const productItem = {
      createdAt: "2022-12-09T06:34:25.607Z",
      product: "Handmade Metal Shoes",
      points: 16434,
      image: "https://loremflickr.com/640/480/transport",
      is_redemption: false,
      id: "1",
    };
    const navigation = { navigate: jest.fn() };
    const component = render(
      <MovementItem productItem={productItem} navigation={navigation} />
    );
    expect(component).toBeDefined();
    expect(component.getAllByLabelText("Image product item")).toBeDefined();
    expect(component.getByText("Handmade Metal Shoes")).toBeDefined();
    expect(component.getByText("9 de diciembre, 2022")).toBeDefined();
    expect(component.getByText("16434")).toBeDefined();
    expect(component.getByTestId("plus-icon")).toBeDefined();
    expect(component.getByTestId("chevron-icon")).toBeDefined();
    const goDetail = component.getByTestId("movement-item");
    fireEvent.press(goDetail);
    expect(navigation.navigate).toHaveBeenCalledWith("ProductDetail", {
      productItem,
    });
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });

  test("should render is_redemption true", () => {
    const productItem = {
      createdAt: "2022-12-09T00:30:23.966Z",
      product: "Fantastic Fresh Gloves",
      points: 23913,
      image: "https://loremflickr.com/640/480/city",
      is_redemption: true,
      id: "4",
    };
    const navigation = { navigate: jest.fn() };
    const component = render(
      <MovementItem productItem={productItem} navigation={navigation} />
    );
    expect(component).toBeDefined();
    expect(component.getAllByLabelText("Image product item")).toBeDefined();
    expect(component.getByText("Fantastic Fresh Gloves")).toBeDefined();
    expect(component.getByText("8 de diciembre, 2022")).toBeDefined();
    expect(component.getByText("23913")).toBeDefined();
    expect(component.getByTestId("minus-icon")).toBeDefined();
    expect(component.getByTestId("chevron-icon")).toBeDefined();
    const goDetail = component.getByTestId("movement-item");
    fireEvent.press(goDetail);
    expect(navigation.navigate).toHaveBeenCalledWith("ProductDetail", {
      productItem,
    });
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
