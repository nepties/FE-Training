import { useState } from "react";
import Square from "./Square";

const Board = ({ sudoku }) => {
  const [sudoku2, setSudoku2] = useState(sudoku);
  const [selectedBoxId, setSelectedBoxId] = useState(-1);

  const handleClick = (id) => () => {
    setSelectedBoxId(id);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode >= 49 && e.keyCode <= 57) {
      console.log(e.keyCode - 48);
    }
  }

  const updateSudoku = (value) => {
    const newSudoku = sudoku2.splice(); // [...sudoku2]
    newSudoku[selectedBoxId] = value;
    setSudoku2(newSudoku);
  }

  const renderSquare = (id, value) => {
    return (
      <Square
        key={"square" + id}
        id={id}
        value={value}
        onClick={handleClick(id)}
      />
    );
  }

  const renderRow = (size, rowNum) => {
    let row = Array(size).fill(null);
    for (let i = 0; i < size; i++) {
      let id = i + size * rowNum
      row[i] = renderSquare(id, sudoku2[id]);
    }

    return (
      <div className="board-row" key={"row" + rowNum}>
        {row}
      </div>
    )
  }

  const size = 9;

  let board = Array(size).fill(null);
  for (let i = 0; i < size; i++) {
    board[i] = renderRow(size, i);
  }

  return (
    <div onKeyDown={handleKeyDown}>
      {board}
    </div>
  );
}


export default Board