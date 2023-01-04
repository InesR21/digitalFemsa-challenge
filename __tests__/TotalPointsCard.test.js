import React from "react";
import { render } from "@testing-library/react-native";
import TotalPointsCard from "../components/TotalPointsCard";

describe("TotalPointsCard", () => {
  test("should render without data", async () => {
    const component = render(<TotalPointsCard />);
    expect(component).toBeDefined();
    expect(component.getByText("TUS PUNTOS")).toBeDefined();
    expect(component.getByText("Diciembre")).toBeDefined();
    expect(component.getByText("0 pts")).toBeDefined();
  });

  test("should render with data", async () => {
    const component = render(<TotalPointsCard totalPoinst={100} />);
    expect(component).toBeDefined();
    expect(component.getByText("TUS PUNTOS")).toBeDefined();
    expect(component.getByText("Diciembre")).toBeDefined();
    expect(component.getByText("100 pts")).toBeDefined();
  });
});
