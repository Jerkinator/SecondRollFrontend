import { useState, useEffect } from "react";
import axios from "axios";
import "./AxiosRollDice.css";

const AxiosRollDice = () => {
  const [rollDice, setRollDice] = useState(false);
  const [result, setResult] = useState("");
  const [shouldShow, setShouldShow] = useState(false);

  const getRandomGameAd = () => {
    if (rollDice) {
      axios
        .get(`http://localhost:8080/api/gameAds/rolldice`)
        .then((res) => {
          console.log(res.data);
          setResult(res.data);
          setRollDice(false);
          setShouldShow(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => getRandomGameAd(), [rollDice]);

  return (
    <div className="container">
      <div>
        <button onClick={() => setRollDice(true)}>
          <img src="images\RolltheDice.png" alt="rtd-button"></img>
        </button>
      </div>
      <div>
        {shouldShow ? (
          <div className="game-info">
            <div>Titel: {result.title}</div>
            <div>Pris: {result.price}</div>
            <div>Säljare: {result.seller}</div>
            <div>Tillverkare: {result.gameCreator}</div>
            <div>Genre: {result.gameGenres}</div>
            <div>Speltid: {result.gamePlayTime}</div>
            <div>Rekommenderad ålder: {result.gameRecommendedAge}</div>
            <div>Antal spelare: {result.gamePlayers}</div>
            <div>Frakt: {result.shippingCost}</div>
            <div>
              <img src={result.photoURL}></img>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AxiosRollDice;
