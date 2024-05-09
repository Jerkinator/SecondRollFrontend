import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import ReusableButton from "../components/ReusableButton";

const CreateGameAd = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [gameCreator, setGameCreator] = useState("");
  const [gamePlayTime, setGamePlayTime] = useState("");
  const [gameRecommendedAge, setGameRecommendedAge] = useState("");
  const [gamePlayers, setGamePlayers] = useState("");
  const [gameGenres, setGameGenres] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  const navigate = useNavigate();
  var user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !price ||
      !description ||
      !gameCreator ||
      !gamePlayTime ||
      !gameRecommendedAge ||
      !gamePlayers ||
      !gameGenres ||
      !photoURL ||
      !shippingCost
    ) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/gameAds`,
        {
          userId: setUserId(user.id),
          title,
          price,
          description,
          gameCreator,
          gamePlayTime,
          gameRecommendedAge,
          gamePlayers,
          gameGenres,
          photoURL,
          shippingCost,
        }
      );

      dispatch({
        type: "CREATE",
        payload: data,
      });

      // Redirects user to Home when logged in.
      return navigate("/");
    } catch (err) {
      console.log("Error " + err);
    }
  };

  return (
    <div className="create-gamead-container">
      <form className="gamead-form" onSubmit={handleSubmit}>
        <h1>Skapa Annons</h1>

        <div>
          <input
            type="text"
            placeholder="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <textarea
            type="text"
            placeholder="Beskrivning..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <input
            type="number"
            placeholder="Pris"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label>Speltillverkare:</label>
          <select
            value={gameCreator}
            onChange={(e) => setGameCreator(e.target.value)}
          >
            <option value="alga">Alga</option>
            <option value="fryxgames">Fryxgames</option>
            <option value="egmont">Egmont</option>
            <option value="lello">Lello</option>
          </select>
        </div>

        <div>
          <label>Speltid:</label>
          <select
            value={gamePlayTime}
            onChange={(e) => setGamePlayTime(e.target.value)}
          >
            <option value="10-30">10-30 min</option>
            <option value="30-60">30-60 min</option>
            <option value="60-120">60-120 min</option>
            <option value="120+">120+ min</option>
          </select>
        </div>

        <div>
          <label>Ålder:</label>
          <select
            value={gameRecommendedAge}
            onChange={(e) => setGameRecommendedAge(e.target.value)}
          >
            <option value="4+">4+</option>
            <option value="8+">8+</option>
            <option value="12+">12+</option>
            <option value="16+">16+</option>
          </select>
        </div>

        <div>
          <label>Antal Spelare:</label>
          <select
            value={gamePlayers}
            onChange={(e) => setGamePlayers(e.target.value)}
          >
            <option value="1-2">1-2 spelare</option>
            <option value="2-4">2-4 spelare</option>
            <option value="4-6">4-6 spelare</option>
            <option value="6-8">6-8 spelare</option>
          </select>
        </div>

        <div>
          <label>Genre:</label>
          <select
            value={gameGenres}
            onChange={(e) => setGameGenres(e.target.value)}
          >
            <option value="family">Familj</option>
            <option value="strategy">Strategi</option>
            <option value="cardgame">Kortspel</option>
            <option value="roleplay">Rollspel</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder="Foto-URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Fraktkostnad"
            value={shippingCost}
            onChange={(e) => setShippingCost(e.target.value)}
          />
        </div>

        <ReusableButton type="submit">Skapa Annons!</ReusableButton>
      </form>
    </div>
  );
};

export default CreateGameAd;

// <select value={genre} onChange={(e) => setGenre(e.target.value)}></select>
