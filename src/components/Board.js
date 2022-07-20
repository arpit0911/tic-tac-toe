import React from "react";
import "./Board.css";
import Box from "./Box";
export const Board = ({ board, onClick, isDisabled }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return <Box key={idx} isDisabled={isDisabled} value={value} onClick={() =>value === null && onClick(idx)} />;
      })}
    </div>
  );
};
