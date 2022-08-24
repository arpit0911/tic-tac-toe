import React from "react";
import "../App.css";

function Box({ value, onClick, isDisabled }) {
  let style = value === "x" ? "box x" : "box o";
  return (
    <>
      <button className={style} disabled={isDisabled} onClick={onClick}>
        {value}
      </button>
    </>
  );
}

export default Box;
