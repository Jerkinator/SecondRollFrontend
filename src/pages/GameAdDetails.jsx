import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const GameAdDetails = () => {
  const { id } = useParams();
  const [gameAd, setGameAds] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/gameAds/` + id,

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
    <div className="game-details-container">
      <img src={gameAd.photoURL} alt="" />
      <h2>Titel: {gameAd.title}</h2>
      <h2>Pris: {gameAd.price} kr</h2>
      <p>Beskrivning: {gameAd.description}</p>
      <p>Genre: {gameAd.gameGenres}</p>
      <p>Antal Spelare: {gameAd.gamePlayers}</p>
      <p>Speltid: {gameAd.gamePlayTime} min</p>
      <p>Speltillverkare: {gameAd.gameCreator}</p>
      <p>Rekommenderad Ålder: {gameAd.gameRecommendedAge}</p>
      <p>Frakt: {gameAd.shippingCost} kr</p>
    </div>
  );
};

export default GameAdDetails;
