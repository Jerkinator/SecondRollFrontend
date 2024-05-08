import { useState, useEffect } from "react";
import "./RolltheDiceButton.css";

const initRollDice = {
  rollthedice: null,
  website: null,
};

const Fetch = () => {
  const [rollDice, setRollDice] = useState(false);

  const getRollDice = async () => {
    const response = await fetch(
      $({ import: meta.env.VITE_API_URL } / gameAds / rolldice)
    );
    const json = await response.json();

    setRollDice({
      gameAds: json.secondRoll,
      website: json.secondroll,
    });
  };

  useEffect(() => {
    getRollDice();
  }, []); // the dependency array
};

const RolltheDice = () => {
  return (
    <div className="container">
      <button onClick={() => setRollDice(true)}>
        <img src="images\RolltheDice.png" alt="rtd-button"></img>
        <div>{`gameAds: ${RolltheDice}`}</div>
      </button>
    </div>
  );
};

export default RolltheDice;
