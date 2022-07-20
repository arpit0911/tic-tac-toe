import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import "./components/box.css";

const Win_Condition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currPlayer, setPlayer] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDisabled, setDisable] = useState(false);
  // let isDisabled = false;
  const handleClick = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return currPlayer === true ? "x" : "o";
      } else {
        return value;
      }
    });
    checkWinner(updateBoard);
    setBoard(updateBoard);
    setPlayer(!currPlayer);
  };
  const checkWinner = (board) => {
    for (let i = 0; i < Win_Condition.length; i++) {
      const [x, y, z] = Win_Condition[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        // console.log(board[x]);
        setWinner(board[x]);
        setDisable(true);
        // console.log("checking");
        return;
      }
    }
    // console.log("after checking");
    checkTied(board);
  };
  function checkTied(board) {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        // console.log("check tied");
        return;
      }
    }
    // console.log("setting tied");
    setWinner("tied");
    setDisable(true);
  }
  function restartGame() {
    setBoard(Array(9).fill(null));
    setPlayer(true);
    setWinner(null);
    setDisable(false);
  }
  let btnStye =
    isDisabled === false ? "restart-btn isDisable-btn" : "restart-btn";
  return (
    <>
      <div className="container">
        <div className="heading-container">
          <h1>
            tic <span className="dash">-</span> tac{" "}
            <span className="dash-two">-</span> toe
          </h1>
        </div>
        <div className="winner-display">
          <span className={`winner-name ${winner}`}>{winner} </span>
        </div>
        <Board isDisabled={isDisabled} board={board} onClick={handleClick} />
        <button className={btnStye} onClick={restartGame}>
          Restart
        </button>
      </div>
    </>
  );
}

export default App;
