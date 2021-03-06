import React from "react";
import { NullableSudokuValue } from "../types/types";
import Board from "./Board";

const Game = () => {
  // prettier-ignore
  const sudoku: NullableSudokuValue[] = [
        1,    null, null, 4,    8,    9,    null, null, 6,
        7,    3,    null, null, null, null, null, 4,    null,
        null, null, null, null, null, 1,    2,    9,    5,
        null, null, 7,    1,    2,    null, 6,    null, null,
        5,    null, null, 7,    null, 3,    null, null, 8,
        null, null, 6,    null, 9,    5,    7,    null, null,
        9,    1,    4,    6,    null, null, null, null, null,
        null, 2,    null, null, null, null, null, 3,    7,
        8,    null, null, 5,    1,    2,    null, null, 4,
    ];

  return (
    <div className="game">
      <div className="game-board">
        <Board sudoku={sudoku} />
      </div>
    </div>
  );
};

export default Game;
