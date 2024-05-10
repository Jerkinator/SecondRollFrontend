import { useState, useEffect } from "react";
import axios from "axios";

const AxiosRollDice = ({ randomGame }) => {
  const [rollDice, setRollDice] = useState(false);

  const getRandomGameAd = () => {
    axios
      .get(`http://localhost:8080/api/gameads/rolldice`)
      .then((res) => {
        console.log(res.data);
        const randomGame = res.data;
        setRollDice(randomGame);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getRandomGameAd(), []);

  return (
    <div className="container">
      <button onClick={getRandomGameAd}>
        <img src="images\RolltheDice.png" alt="rtd-button"></img>
      </button>
    </div>
  );
};

export default AxiosRollDice;
