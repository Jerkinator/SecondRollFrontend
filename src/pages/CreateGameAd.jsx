import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import ReusableButton from "../components/ReusableButton";

const CreateGameAd = () => {
  return (
    <div className="create-gamead-container">
      <form className="gamead-form">
        <h1>Skapa Annons</h1>

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
          <label>Speltillverkare:</label>
          <select>
            <option value="alga">Alga</option>
            <option value="fryxgames">Fryxgames</option>
            <option value="egmont">Egmont</option>
            <option value="lello">Lello</option>
          </select>
        </div>

        <div>
          <label>Speltid:</label>
          <select placeholder="Rekommenderad speltid">
            <option value="10-30">10-30 min</option>
            <option value="30-60">30-60 min</option>
            <option value="60-120">60-120 min</option>
            <option value="120+">120+ min</option>
          </select>
        </div>

        <ReusableButton type="submit">Skapa Annons!</ReusableButton>
      </form>
    </div>
  );
};

export default CreateGameAd;

// <select value={genre} onChange={(e) => setGenre(e.target.value)}></select>
