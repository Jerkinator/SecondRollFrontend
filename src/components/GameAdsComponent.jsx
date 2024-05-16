import { useState, useEffect } from "react";
import FetchAllGameAds from "./FetchAllGameAds";
import { useParams } from "react-router-dom";

function GameAdsComponent() {
  const [gameAds, setGameAds] = useState([]);

  var games = JSON.parse(localStorage.getItem("gameads"));

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
          <FetchAllGameAds
            key={i}
            photoURL={g.photoURL}
            title={g.title}
            price={g.price}
            id={g.id}
          />
      )})}      
    </div>
  )

}

export default GameAdsComponent;
