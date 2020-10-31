import React from "react";
import { render } from "@testing-library/react";
import ScoreScreen from "./ScoreScreen";

test("renders without crashing", () => {
  const score = 5;
  const div = document.createElement("div");
  render(<ScoreScreen score={score} />, div);
});

test("renders message when score is good", () => {
  const { getByText } = render(<ScoreScreen score={10} />);
  expect(getByText("Great Job on the Quiz!")).toBeInTheDocument();
});

test("renders a message when score is bad", () => {
  const { getByText } = render(<ScoreScreen score={4} />);
  expect(getByText("Better luck next time!")).toBeInTheDocument();
});
