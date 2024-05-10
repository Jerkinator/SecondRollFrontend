import { useState, useEffect } from "react";
import "./RolltheDiceButton.css";
import axios from "axios";

const RolltheDice = () => {
  const [rollDice, setRollDice] = useState([false]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/gameads/rolldice`, {
        withCredentials: true,
      })
      .then((res) => {
        setRollDice(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOnClick = () => {};

  return (
    <div className="container">
      <button onClick={handleOnClick}>
        <img src="images\RolltheDice.png" alt="rtd-button"></img>
      </button>
    </div>
  );
};

export default RolltheDice;
