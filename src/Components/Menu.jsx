import { useContext } from "react";
import { gameContext } from "../App";

function Menu() {
  const { setGameState, setName, name } = useContext(gameContext);
  return (
    <>
      <div className="Menu">
        <h1>QUIZ APP</h1>
        <div className="menu-title">
          <input
            className="in-text"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: ushen ..."
          />
          <button
            onClick={() => {
              if (name === "") {
                alert("Please Write Your Name First");
              } else {
                setGameState("quiz");
              }
            }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
