import { useState, createContext } from "react";
import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import End from "./Components/End";
import "./App.css";

export const gameContext = createContext();
function App() {
  const [gameState, setGameState] = useState("menu");
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="whole-quiz">
      <gameContext.Provider
        value={{ setGameState, setName, name, score, setScore }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}
      </gameContext.Provider>
    </div>
  );
}

export default App;
