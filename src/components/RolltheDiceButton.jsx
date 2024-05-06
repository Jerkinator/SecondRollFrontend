import React from "react";
import { useState } from "react";
import "./RolltheDiceButton.css";

function RolltheDice() {
  const [rollDice, setRollDice] = useState(false);

  function handleClick() {
    setRollDice(true);
  }
}

const RolltheDice = () => {
  return (
    <div className="dice-button">
      <button onClick={() => handleClick(true)}>
        <img src="images\RolltheDice.png" alt="RTD-button"></img>
      </button>
    </div>
  );
};

export default RolltheDice;
