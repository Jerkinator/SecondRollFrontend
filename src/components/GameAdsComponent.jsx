import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GameAdsComponent() {
  const [gameAds, setGameAds] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/gameAds/all`,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => setGameAds(data));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Alla Spel</h1>
      {gameAds.map((g, i) => {
        return (
          <div className="gameAd-container" key={i}>
            <Link to={`/gameAds/${g.id}`} >
              <img src={g.photoURL} />
              <p>Titel: {g.title}</p>
              <p>Pris: {g.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default GameAdsComponent;

{
  /* <FetchAllGameAds
            key={i}
            photoURL={g.photoURL}
            title={g.title}
            price={g.price}
            id={g.id}
          /> */
}
