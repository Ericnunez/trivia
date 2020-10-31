import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "./Main";

test("renders without crashing", () => {
  const data = [
    {
      question: "test question",
      incorrect: ["answer1", "answer2", "answer3"],
      correct: "answer4",
    },
  ];
  const div = document.createElement("div");
  render(<Main data={data} />, div);
});

test("next button enabled when an answer is selected", () => {
  const data = [
    {
      question: "test question",
      incorrect: ["answer1", "answer2", "answer3"],
      correct: "answer4",
    },
  ];
  const { getByText } = render(<Main data={data} />);
  userEvent.click(getByText("answer2"));
  expect(getByText("Next")).toBeEnabled();
});
