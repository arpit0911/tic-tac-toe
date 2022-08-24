import React from "react";
import "../App.css";

const WinnerBoard = ({ winner }) => {
  return (
    <section>
      <div className="winner-display">
        <span>Winner: </span>
        <span className={`winner-name ${winner}`}>{winner} </span>
      </div>
    </section>
  );
};
export default WinnerBoard;
