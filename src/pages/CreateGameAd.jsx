import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import ReusableButton from "../components/ReusableButton";

const CreateGameAd = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [gameCreator, setGameCreator] = useState("");
  const [gamePlayTime, setGamePlayTime] = useState("");

  return (
    <div className="create-gamead-container">
      <form className="gamead-form">
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
          <select>
            <option value="4+">4+</option>
            <option value="8+">8+</option>
            <option value="12+">12+</option>
            <option value="16+">16+</option>
          </select>
        </div>

        <div>
          <label>Antal Spelare:</label>
          <select>
            <option value="1-2">1-2 spelare</option>
            <option value="2-4">2-4 spelare</option>
            <option value="4-6">4-6 spelare</option>
            <option value="6-8">6-8 spelare</option>
          </select>
        </div>

        <div>
          <label>Genre:</label>
          <select>
            <option value="family">Familj</option>
            <option value="strategy">Strategi</option>
            <option value="cardgame">Kortspel</option>
            <option value="roleplay">Rollspel</option>
          </select>
        </div>

        <div>
          <input type="text" placeholder="Foto-URL" />
        </div>

        <div>
          <input type="text" placeholder="Fraktkostnad" />
        </div>

        <ReusableButton type="submit">Skapa Annons!</ReusableButton>
      </form>
    </div>
  );
};

export default CreateGameAd;

// <select value={genre} onChange={(e) => setGenre(e.target.value)}></select>
