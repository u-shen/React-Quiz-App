import { useContext, useState } from "react";
import { gameContext } from "../App";
import App from "../App";

function End() {
  const { name, score } = useContext(gameContext);
  const [reApply, setReApply] = useState(false);
  if (reApply) return <App />;
  return (
    <div className="End">
      <div>
        <table border="1">
          <tr>
            <th>NAME</th>
            <th>SCORE</th>
          </tr>
          <tr>
            <th>{name}</th>
            <th>{score}</th>
          </tr>
        </table>
      </div>
      <button onClick={() => setReApply(true)}>Play Again</button>
    </div>
  );
}

export default End;
