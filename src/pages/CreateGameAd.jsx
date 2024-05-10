import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import ReusableButton from "../components/ReusableButton";

const CreateGameAd = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [gameCreator, setGameCreator] = useState("");
  const [gamePlayTime, setGamePlayTime] = useState("");
  const [gameRecommendedAge, setGameRecommendedAge] = useState("");
  const [gamePlayers, setGamePlayers] = useState("");
  const [gameGenres, setGameGenres] = useState([]);
  const [photoURL, setPhotoURL] = useState("");
  const [shippingCost, setShippingCost] = useState();

  const navigate = useNavigate();
  var user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      user.id,
      title,
      price,
      description,
      gameCreator,
      gamePlayTime,
      gameRecommendedAge,
      gamePlayers,
      gameGenres,
      photoURL,
      shippingCost
    );

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
          userId: user.id,
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
        },
        {
          withCredentials: true,
        }
      );

      // Redirects user to Home when gameAd has been created.
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
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Pris"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <select
            value={gameCreator}
            onChange={(e) => setGameCreator(e.target.value)}
          >
            <option disabled={true} value="">
              Speltillverkare
            </option>
            <option value="alga">Alga</option>
            <option value="fryxgames">Fryxgames</option>
            <option value="egmont">Egmont</option>
            <option value="lello">Lello</option>
            <option value="other">Annat</option>
          </select>
        </div>

        <div>
          <select
            value={gamePlayTime}
            onChange={(e) => setGamePlayTime(e.target.value)}
          >
            <option disabled={true} value="">
              Speltid
            </option>
            <option value="10-30">10-30 min</option>
            <option value="30-60">30-60 min</option>
            <option value="60-120">60-120 min</option>
            <option value="120+">120+ min</option>
            <option value="other">Annat</option>
          </select>
        </div>

        <div>
          <select
            value={gameRecommendedAge}
            onChange={(e) => setGameRecommendedAge(e.target.value)}
          >
            <option disabled={true} value="">
              Ålder
            </option>
            <option value="4+">4+</option>
            <option value="8+">8+</option>
            <option value="12+">12+</option>
            <option value="16+">16+</option>
            <option value="other">Annat</option>
          </select>
        </div>

        <div>
          <select
            value={gamePlayers}
            onChange={(e) => setGamePlayers(e.target.value)}
          >
            <option disabled={true} value="">
              Antal Spelare
            </option>
            <option value="1-2">1-2 spelare</option>
            <option value="2-4">2-4 spelare</option>
            <option value="4-6">4-6 spelare</option>
            <option value="6-8">6-8 spelare</option>
            <option value="other">Annat</option>
          </select>
        </div>

        <div>
          <select
            value={[gameGenres]}
            onChange={(e) => setGameGenres([e.target.value])}
          >
            <option disabled={true} value="">
              Genre
            </option>
            <option value="family">Familj</option>
            <option value="strategy">Strategi</option>
            <option value="cardgame">Kortspel</option>
            <option value="roleplay">Rollspel</option>
            <option value="other">Annat</option>
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
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
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
