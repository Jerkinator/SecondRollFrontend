import { Link } from "react-router-dom";

function FetchAllGameAds({ title, price, photoURL, id }) {
  console.log(id);
  return (
    <div className="gameAd-container">
      <Link to={`/gameAds/${id}`}>
        <img src={photoURL} />
        <p>Titel: {title}</p>
        <p>Pris: {price} kr</p>
      </Link>
    </div>
  );
}

export default FetchAllGameAds;
