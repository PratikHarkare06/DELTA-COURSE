import { useState } from "react";

export default function LudoBoard() {
  const [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    green: 0,
    yellow: 0,
  });

  const [arr, setArr] = useState(["no moves yet"]);

  let updateMoves = (color) => {
    setMoves((currMoves) => {
      return { ...currMoves, [color]: currMoves[color] + 1 };
    });
    setArr([...arr, `${color} player moved`]);
  };

  return (
    <div>
      <p>Game Begins</p>
      <div className="board">
        <p>Blue Player Moves= {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => updateMoves("blue")}
        >
          +1
        </button>
        <p> Red Player Moves {moves.red}</p>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => updateMoves("red")}
        >
          +1
        </button>
        <p> Green Player Moves {moves.green}</p>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => updateMoves("green")}
        >
          +1
        </button>
        <p> Yellow Player Moves {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => updateMoves("yellow")}
        >
          +1
        </button>
      </div>
    </div>
  );
}
