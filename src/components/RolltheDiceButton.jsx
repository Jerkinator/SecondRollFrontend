import React from "react";
import { useState, useEffect } from "react";
import "./RolltheDiceButton.css";

const RolltheDice = () => {
  const [rollDice, setRollDice] = useState(false);

  useEffect(() => {
    // the code we want to run
    console.log("Showing game ad:", rollDice);

    // optional return function
  }, []); // the dependency array

  return (
    <div className="container">
      <button>
        <img src="images\RolltheDice.png" alt="rtd-button"></img>
      </button>
    </div>
  );
};

export default RolltheDice;
