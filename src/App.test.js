import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("render without errors", () => {
  render(<App />);
});

test("When app mounts, add new animal header exists on the screen", () => {
  //Arrange
  render(<App />);

  //Act
  const header = screen.getByText("Add New Animal");

  //Assert
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent(/add new animal/i);
});
