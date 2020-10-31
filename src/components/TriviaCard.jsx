import React, { useMemo } from "react";

const TriviaCard = ({
  data: { question, correct, incorrect },
  handleAnswer,
  selected,
}) => {
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  // useMemo allows for the answers array to persist when setting state of score
  // when the user clicks an answer
  const shuffledArray = useMemo(() => {
    const answers = [correct, ...incorrect];
    return shuffle(answers);
  }, [correct, incorrect]);

  const showCorrectAnswer = (answer, correct) => {
    return answer === correct
      ? "m-1 btn btn-lg btn-success"
      : "m-1 btn btn-lg btn-danger ";
  };

  return (
    <section>
      <div className="mt-4 card">
        <div className="card-header text-center">
          <h2>{question}</h2>
        </div>
        <div className="card-content d-flex flex-column m-4">
          {shuffledArray.map((answer) => (
            <button
              onClick={() => handleAnswer(answer)}
              disabled={selected}
              className={
                selected
                  ? `${showCorrectAnswer(answer, correct)}`
                  : "m-1 btn btn-lg btn-primary "
              }
              key={answer}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TriviaCard;
