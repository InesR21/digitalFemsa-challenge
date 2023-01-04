import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MovementsContainer from "../components/MovementsContainer";

const mockData = [
  {
    createdAt: "2022-12-09T06:34:25.607Z",
    product: "Handmade Metal Shoes",
    points: 16434,
    image: "https://loremflickr.com/640/480/transport",
    is_redemption: false,
    id: "1",
  },
  {
    createdAt: "2022-12-09T00:30:23.966Z",
    product: "Fantastic Fresh Gloves",
    points: 23913,
    image: "https://loremflickr.com/640/480/city",
    is_redemption: true,
    id: "4",
  },
];

describe("MovementItem", () => {
  test("should render without data", () => {
    const navigation = { navigate: jest.fn() };
    const component = render(<MovementsContainer navigation={navigation} />);
    expect(component).toBeDefined();
    expect(component.getByText("No hay movimientos")).toBeDefined();
  });

  test("should flatlist return keyExtractor correctly", () => {
    const navigation = { navigate: jest.fn() };
    const component = render(
      <MovementsContainer navigation={navigation} products={mockData} />
    );
    expect(component).toBeDefined();
    const flatList = component.getByTestId("flatlist-movements");
    expect(flatList).toBeDefined();
    expect(flatList.props.data).toEqual(mockData);
    expect(flatList.props.keyExtractor(mockData[0])).toEqual("1");
    expect(flatList.props.keyExtractor(mockData[1])).toEqual("4");
  });
});
