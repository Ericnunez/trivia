import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Header />, div);
});

test("renders correct question count", () => {
  const count = 2;
  const { getByText } = render(<Header count={count} />);
  expect(getByText(`Question: ${count} / 10`)).toBeInTheDocument();
});
