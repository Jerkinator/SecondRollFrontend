import { useState, useEffect } from "react";
import "./RolltheDiceButton.css";
import axios from "axios";

const initRollDice = {
  rollthedice: null,
  website: null,
};

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

const RolltheDice = () => {
  const [rollDice, setRollDice] = useState([false]);
  const getRollDice = async () => {
    await axios.get(`https://localhost:8080/api/gameads`);
  };

  useEffect(() => {
    getRollDice();
  }, []); // the dependency array, on click??

  return (
    <div className="container">
      <button>
        <img src="images\RolltheDice.png" alt="rtd-button"></img>
      </button>
    </div>
  );
};
export default RolltheDice;
