import Header from "./Header";
import TriviaCard from "./TriviaCard";
import React, { useState } from "react";
import ScoreScreen from "./ScoreScreen";

function Main({ data }) {
  const RANDOM_INITIAL_START = Math.floor(Math.random() * data.length);
  const TOTAL_ROUNDS = 10;
  const [questions, setQuestions] = useState(data);
  const [index, setIndex] = useState(RANDOM_INITIAL_START);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(1);
  const [seenArray, setSeenArray] = useState([RANDOM_INITIAL_START]);
  const [selected, setSelected] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    setCount(count + 1);
    generateNewQuestion();
    setSelected(false);
  };

  const generateNewQuestion = () => {
    let random;
    do {
      random = Math.floor(Math.random() * data.length);
    } while (seenArray.includes(random));
    seenArray.push(random);
    setIndex(random);
  };

  const handleAnswer = (answer) => {
    setSelected(true);
    if (answer === questions[index].correct) {
      setScore(score + 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main>
      <Header count={count} />
      {!submitted ? (
        <div className="container">
          <TriviaCard
            selected={selected}
            handleNext={handleNext}
            data={questions[index]}
            handleAnswer={handleAnswer}
          />
          <section className="text-right">
            {seenArray.length === TOTAL_ROUNDS ? (
              <button
                onClick={handleSubmit}
                disabled={!selected}
                className="mt-2 btn btn-lg btn-primary"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!selected}
                className="mt-2 btn btn-lg btn-primary"
              >
                Next
              </button>
            )}
          </section>
        </div>
      ) : (
        <ScoreScreen score={score} TOTAL_ROUNDS={TOTAL_ROUNDS} />
      )}
    </main>
  );
}

export default Main;
