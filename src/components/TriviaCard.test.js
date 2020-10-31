import React from "react";
import { render } from "@testing-library/react";
import TriviaCard from "./TriviaCard";

test("renders without crashing", () => {
  const data = {
    question: "test question",
    incorrect: ["answer1", "answer2", "answer3"],
    correct: "answer4",
  };
  const div = document.createElement("div");
  render(<TriviaCard data={data} />, div);
});

test("renders question component with answers", () => {
  const data = {
    question: "test question",
    incorrect: ["answer1", "answer2", "answer3"],
    correct: "answer4",
  };
  const { getByText } = render(<TriviaCard data={data} />);
  expect(getByText("test question")).toBeInTheDocument();
  expect(getByText("answer1")).toBeInTheDocument();
  expect(getByText("answer2")).toBeInTheDocument();
  expect(getByText("answer3")).toBeInTheDocument();
  expect(getByText("answer4")).toBeInTheDocument();
});
