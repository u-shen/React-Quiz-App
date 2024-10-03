import { useContext, useState } from "react";
import { gameContext } from "../App";
import question from "./Helpers/Questions";
function Quiz() {
  let { score, setScore, setGameState, name } = useContext(gameContext);
  const [currentQuestions, setCurrnetQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const nextQuestions = () => {
    setCurrnetQuestion(currentQuestions + 1);
    if (answer === question[currentQuestions].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const finished = () => {
    if (answer === question[currentQuestions].answer) {
      setScore((prev) => prev + 1);
    }
    setGameState("end");
  };

  return (
    <div className="Quiz">
      <h2>Welcome {name}</h2>
      <h5>{question[currentQuestions].prompt}</h5>
      <div className="Buttons">
        <button onClick={() => setAnswer("A")}>
          {question[currentQuestions].optionA}
        </button>
        <button onClick={() => setAnswer("B")}>
          {question[currentQuestions].optionB}
        </button>
        <button onClick={() => setAnswer("C")}>
          {question[currentQuestions].optionC}
        </button>
      </div>
      {currentQuestions === question.length - 1 ? (
        <button onClick={finished}>Finished Questions</button>
      ) : (
        <button onClick={nextQuestions}>Next Questions</button>
      )}
      <h4>Score: 0/{score}</h4>
    </div>
  );
}

export default Quiz;
