# Tandem Trivia

This my entry for the 2020 Tandem code challenge.

The challenge was to create an application that displays trivia questions with multiple-choice answers to select from.

## Assumptions given

- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

## Acceptance Criteria

- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round

## Testing

Unit tests were made using `testing-library/react` and `testing-library/user-event`.

Every component has a corresponding test file appending test to the component name. Ex: `Main.jsx` : `Main.test.jsx`.

To run the tests you can run npm test to run the suite of tests using `Jest`. There are currently 5 suites and 12 tests.

## My Assumptions

- Question ordering is not mentioned in the requirements so I decided to randomly select different questions, keeping track to make sure a question does not appear twice.
- Answer ordering is also not mentioned but I also implemented a shuffle function to randomly place the answers on the board.
- A reset button is also not specified, but if later required I have already added it to **_Future Additional Features_**.

## Future Additional Features

- The ability to reset the game and play another round without refreshing.
- The ability to save a users score and name arcade style and display a high scores screen.
- A points system that is based on the amount of time a users takes to select an answer. Kind of like kahoot.
- Adding percentages to each question based on the amount of times users get the question right/wrong.

## Running the Application

The project was bootstrapped using the excellent tool `create-react-app`. This allows for some pretty awesome scripts to be available out of the box. All of the following scripts are available to use.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
