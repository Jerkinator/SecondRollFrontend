import { Link } from "react-router-dom";
import AxiosRollDice from "./AxiosRollDice";

function FetchAllGameAds({ title, price, photoURL, id }) {
  console.log(id);
  return (
    <div className="roll-dice-container">
      <AxiosRollDice />
      <div className="gameAd-container">
        <Link to={`/gameAds/${id}`}>
          <img src={photoURL} />
          <p>Titel: {title}</p>
          <p>Pris: {price} kr</p>
        </Link>
      </div>
    </div>
  );
}

export default FetchAllGameAds;
