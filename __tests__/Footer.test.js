import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Footer from "../components/Footer";

const mockFilterTrue = jest.fn();
const mockFilterFalse = jest.fn();
const mockNotFiltered = jest.fn();

afterEach(() => {
  mockFilterTrue.mockClear();
  mockFilterFalse.mockClear();
  mockNotFiltered.mockClear();
});

describe("Footer", () => {
  test("should render", () => {
    const component = render(
      <Footer
        filterTrue={mockFilterTrue}
        filterFalse={mockFilterFalse}
        notFiltered={mockNotFiltered}
      />
    );
    expect(component).toBeDefined();
    expect(component.getByTestId("button-filterTrue")).toBeDefined();
    expect(component.getByTestId("button-filterFalse")).toBeDefined();
  });

  test("should filterTrue be called", () => {
    const component = render(
      <Footer
        filterTrue={mockFilterTrue}
        filterFalse={mockFilterFalse}
        notFiltered={mockNotFiltered}
      />
    );
    expect(component).toBeDefined();
    const button = component.getByTestId("button-filterTrue");
    expect(button).toBeDefined();
    fireEvent.press(button);
    expect(mockFilterTrue).toHaveBeenCalled();
    expect(mockFilterFalse).not.toHaveBeenCalled();
    expect(mockNotFiltered).not.toHaveBeenCalled();
    expect(component.getByTestId("button-notFiltered")).toBeDefined();
  });

  test("should filterFalse be called", () => {
    const component = render(
      <Footer
        filterTrue={mockFilterTrue}
        filterFalse={mockFilterFalse}
        notFiltered={mockNotFiltered}
      />
    );
    expect(component).toBeDefined();
    const button = component.getByTestId("button-filterFalse");
    expect(button).toBeDefined();
    fireEvent.press(button);
    expect(mockFilterFalse).toHaveBeenCalled();
    expect(mockFilterTrue).not.toHaveBeenCalled();
    expect(mockNotFiltered).not.toHaveBeenCalled();
    expect(component.getByTestId("button-notFiltered")).toBeDefined();
  });

  test("should notFiltered be called", () => {
    const component = render(
      <Footer
        filterTrue={mockFilterTrue}
        filterFalse={mockFilterFalse}
        notFiltered={mockNotFiltered}
      />
    );
    expect(component).toBeDefined();
    const buttonFilterFalse = component.getByTestId("button-filterFalse");
    const buttonFilterTrue = component.getByTestId("button-filterTrue");
    fireEvent.press(buttonFilterFalse);
    expect(mockFilterFalse).toHaveBeenCalled();
    const buttonNotFiltered = component.getByTestId("button-notFiltered");
    expect(buttonNotFiltered).toBeDefined();
    fireEvent.press(buttonNotFiltered);
    expect(mockNotFiltered).toHaveBeenCalled();
    expect(mockFilterTrue).not.toHaveBeenCalled();
    expect(buttonFilterFalse).toBeDefined();
    expect(buttonFilterTrue).toBeDefined();
  });
});
