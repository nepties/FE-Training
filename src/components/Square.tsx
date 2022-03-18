import React from "react";
import { useEffect, useState } from "react";
import { NullableSudokuValue } from "../types/types";

interface SquareProps {
  id: number;
  value: NullableSudokuValue;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Square = ({ id, value, onClick }: SquareProps) => {
  const [editable, setEditable] = useState("");

  useEffect(() => {
    if (value === null) {
      setEditable(" editable");
    }
  }, [value]);

  let borderClass = "";

  if (id % 3 === 2 && id % 9 !== 8) {
    borderClass += " right-boundary";
  }

  if (Math.floor(id / 9) === 2 || Math.floor(id / 9) === 5) {
    borderClass += " bottom-boundary";
  }

  return (
    <button
      className={"square" + editable + borderClass}
      id={id.toString()}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
