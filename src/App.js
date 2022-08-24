import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import Header from "./components/Header";
import WinnerBoard from "./components/WinnerBoard";

const WIN_CONDITION = [
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
  const [isDisabled, setIsDisable] = useState(false);
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
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [x, y, z] = WIN_CONDITION[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        // console.log(board[x]);
        setWinner(board[x]);
        setIsDisable(true);
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
    setWinner("-");
    setIsDisable(true);
  }
  function restartGame() {
    setBoard(Array(9).fill(null));
    setPlayer(true);
    setWinner(null);
    setIsDisable(false);
  }
  let btnStye =
    isDisabled === false ? "restart-btn isDisable-btn" : "restart-btn";
  return (
    <>
      <div className="container">
        <Header />
        <WinnerBoard winner={winner} />
        <Board isDisabled={isDisabled} board={board} onClick={handleClick} />
        <button className={btnStye} onClick={restartGame}>
          Restart
        </button>
      </div>
    </>
  );
}

export default App;
