import { useState, useEffect } from "react";
import axios from "axios";
import "./AxiosRollDice.css";
import Modal from "./Modal";
import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";

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
          <img src="images\RolltheDice.png" className="rtd-button"></img>
        </button>
      </div>
      <div>
        {shouldShow ? (
          <Modal close={() => setShouldShow(false)}>
            <div className="game-info">
              <div>Titel: {result.title}</div>
              <div>Pris: {result.price} kr</div>
              <div>Säljare: {result.seller}</div>
              <div>
                <img src={result.photoURL} className="game-img"></img>
              </div>
            </div>
            <Link to={`/gameads/${result.id}`}>
              <ReusableButton>Gå till annons</ReusableButton>
            </Link>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default AxiosRollDice;
