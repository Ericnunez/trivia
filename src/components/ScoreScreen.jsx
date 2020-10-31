import React from "react";
import goodJob from "../images/goodjob.gif";
import niceTry from "../images/nicetry.gif";

const ScoreScreen = ({ score, TOTAL_ROUNDS }) => {
  return (
    <div className="text-center mt-4">
      <React.Fragment>
        {score > 5 ? (
          <div>
            <h1>Great Job on the Quiz!</h1>
            <img src={goodJob} alt="Thumbs up" />
          </div>
        ) : (
          <div>
            <h1>Better luck next time!</h1>
            <img src={niceTry} alt="Nice try" />
          </div>
        )}
      </React.Fragment>

      <h2>
        You scored {score} out of {TOTAL_ROUNDS}
      </h2>
    </div>
  );
};

export default ScoreScreen;
