import { useState, useEffect } from "react";
import axios from "axios";
import "./AxiosRollDice.css";

const AxiosRollDice = ({ randomGame }) => {
  const [rollDice, setRollDice] = useState(false);

  const getRandomGameAd = () => {
    axios
      .get(`http://localhost:8080/api/gameAds/rolldice`)
      .then((res) => {
        console.log(res.data);
        const randomGame = res.data;
        setRollDice(randomGame);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleFunc = () => {
    setRollDice(!rollDice);
  };

  useEffect(() => getRandomGameAd(), []);

  return (
    <div className={rollDice ? getRandomGameAd : rollDice}>
      <button onClick={toggleFunc}>
        <img src="images\RolltheDice.png" alt="rtd-button"></img>
      </button>
      <div></div>
    </div>
  );
};

export default AxiosRollDice;
