import { useState, useEffect } from "react";
import axios from "axios";
import "./AxiosRollDice.css";

const AxiosRollDice = ({ randomGame }) => {
  const [rollDice, setRollDice] = useState(false);
  const [result, setResult] = useState("");

  const getRandomGameAd = () => {
    if (rollDice) {
      axios
        .get(`http://localhost:8080/api/gameAds/rolldice`)
        .then((res) => {
          console.log(res.data);
          setResult(res.data);
          setRollDice(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => getRandomGameAd(), [rollDice]);

  return (
    <div>
      <div className="container">
        <button onClick={() => setRollDice(true)}>
          <img src="images\RolltheDice.png" alt="rtd-button"></img>
        </button>
      </div>
      <div className="gameInfo">
        <div>Titel: {result.title}</div>
        <div>Pris: {result.price}</div>
        <div>Säljare: {result.seller}</div>
        <div>Tillverkare: {result.gameCreator}</div>
        <div>Speltid: {result.gamePlayTime}</div>
        <div>Rekommenderad ålder: {result.gameRecommendedAge}</div>
        <div>Antal spelare: {result.gamePlayers}</div>
        <div>
          <img src={result.photoURL}></img>
        </div>
      </div>
    </div>
  );
};

export default AxiosRollDice;
