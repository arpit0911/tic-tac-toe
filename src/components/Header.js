import React from "react";
import '../App.css'

const Header = () => {
  return (
    <header>
      <div className="heading-container">
        <h1>
          tic <span className="dash">-</span> tac{" "}
          <span className="dash-two">-</span> toe
        </h1>
      </div>
    </header>
  );
};
export default Header