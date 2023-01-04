import React from "react";
import { render } from "@testing-library/react-native";
import Header from "../components/Header";

describe("Header", () => {
  test("should render", async () => {
    const component = render(<Header />);
    expect(component).toBeDefined();
    expect(component.getByText("Bienvenido de vuelta!")).toBeDefined();
    expect(component.getByText("Ruben Rodriguez")).toBeDefined();
  });
});
