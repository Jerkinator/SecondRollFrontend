import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const initGame = {
  title: null,
  description: null,
  price: null,
  creator: null,
  playtime: null,
  age: null,
  players: null,
};

function GameAdPreview(props) {
  const { state: { game } = {} } = useLocation();

  const [gameAd, setGameAd] = useState(initGame);

  useEffect(() => {
    const getGameAd = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/gameAds/` + game,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();

      setGameAd({
        title: data.title,
        description: data.description,
        price: data.price,
        creator: data.gameCreator,
        playtime: data.gamePlayTime,
        age: data.gameRecommendedAge,
        players: data.gamePlayers,
      });
    };
    getGameAd();
  }, []);

  return (
    <div className="userContainer">
      <h3>{`Titel: ${gameAd.title}`}</h3>
      <h3>{`Beskrivning:  ${gameAd.description}`}</h3>
      <h3>{`Pris: ${gameAd.price}`}</h3>
      <h3>{`Kreatör: ${gameAd.creator}`}</h3>
      <h3>{`Speltid: ${gameAd.playtime}`}</h3>
      <h3>{`Rekommenderad ålder: ${gameAd.age}`}</h3>
      <h3>{`Antal spelare: ${gameAd.players}`}</h3>
    </div>
  );
}

export default GameAdPreview;
