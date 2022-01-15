import React from "react";
import { useState } from "react";
import { SudokuValue, NullableSudokuValue } from "../types";
import Square from "./Square";

interface BoardProps {
    sudoku: NullableSudokuValue[];
}

const Board = ({ sudoku }: BoardProps) => {
    const [sudoku2, setSudoku2] = useState(sudoku);
    const [selectedBoxId, setSelectedBoxId] = useState(-1);

    const handleClick = (id: number) => () => {
        if (sudoku[id] === null) {
            setSelectedBoxId(id);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.keyCode >= 49 && e.keyCode <= 57) {
            updateSudoku((e.keyCode - 48) as SudokuValue);
        }
    };

    const updateSudoku = (value: SudokuValue) => {
        const newSudoku = sudoku2.slice(); // [...sudoku2]
        newSudoku[selectedBoxId] = value;
        setSudoku2(newSudoku);
    };

    const renderSquare = (id: number, value: NullableSudokuValue) => {
        return (
            <Square
                key={"square" + id}
                id={id}
                value={value}
                onClick={handleClick(id)}
            />
        );
    };

    const renderRow = (size: number, rowNum: number) => {
        let row = Array(size).fill(null);
        for (let i = 0; i < size; i++) {
            let id = i + size * rowNum;
            row[i] = renderSquare(id, sudoku2[id]);
        }

        return (
            <div className="board-row" key={"row" + rowNum}>
                {row}
            </div>
        );
    };

    const size = 9;

    let board = Array(size).fill(null);
    for (let i = 0; i < size; i++) {
        board[i] = renderRow(size, i);
    }

    return <div onKeyDown={handleKeyDown}>{board}</div>;
};

export default Board;
