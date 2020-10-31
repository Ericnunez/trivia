import Main from "./components/Main";
import data from "./utils/Apprentice_TandemFor400_Data.json";
import "./styles/trivia.css";

function App() {
  return (
    <div className="App">
      <Main data={data} />
    </div>
  );
}

export default App;
