import { render, screen, waitFor } from "@testing-library/react";
import AnimalForm from "./components/AnimalForm";
import React from "react";
import userEvent from "@testing-library/user-event";

test("renders without errors", () => {
  render(<AnimalForm />);
});

test("When a user fills all fields and submits, species appears in list", async () => {
  //arragne
  render(<AnimalForm />);
  const species = "feline";
  //act
  const speciesInput = screen.getByLabelText(/species:/i);
  userEvent.type(speciesInput, species);

  const ageInput = screen.getByLabelText(/age:/i);
  userEvent.type(ageInput, "9");

  const notesInput = screen.getByLabelText(/notes:/i);
  userEvent.type(notesInput, "he is a good boy");

  const submitBtn = screen.getByRole('button')
  userEvent.click(submitBtn)
  //assertion
  await waitFor(() => {
    const speciesFeedback = screen.queryByText(species);
    expect(speciesFeedback).toBeInTheDocument()
  })
});
