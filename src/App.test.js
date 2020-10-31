import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<App />, div);
});

test("renders next button", () => {
  const { getByText } = render(<App />);
  userEvent.click(getByText("Next"));
});

test("next button disabled on initial start", () => {
  const { getByText } = render(<App />);
  expect(getByText("Next")).toBeDisabled();
});
