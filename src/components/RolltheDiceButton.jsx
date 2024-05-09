import { useState, useEffect } from "react";
import "./RolltheDiceButton.css";
import axios from "axios";

const RolltheDice = () => {
  const [rollDice, setRollDice] = useState([false]);

  const handleOnClick = (setRollDice = true) => {
    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/gameads/all`, { withCredentials: true })
        .then((res) => {
          setRollDice(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  };

  return (
    <div className="container">
      <button onClick={setRollDice}>
        <img src="images\RolltheDice.png" alt="rtd-button"></img>
      </button>
    </div>
  );
};
export default RolltheDice;
