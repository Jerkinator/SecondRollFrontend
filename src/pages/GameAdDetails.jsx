import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReusableButton from "../components/ReusableButton";
import axios from "axios";

const GameAdDetails = () => {
  const { id } = useParams();
  const [gameAd, setGameAds] = useState([]);
  const navigate = useNavigate();

  // fetches the logged in users credentials
  var user = JSON.parse(localStorage.getItem("user"));

  // Fetches the clicked game's data and puts it in the const gameAd
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

  // Uses the fetched users id and puts it in the endpoint of the put request
  // Then uses the Id of the game and sends it along in the body
  const handleAddToWishlist = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/users/wishlist/` + user.id,
        {
          gameId: gameAd.id,
        },
        {
          withCredentials: true,
        }
      );

      // Redirects user to wishlist when game has been added to wishlist.
      return navigate("/wishlist");
    } catch (err) {
      console.log("Error " + err);
    }
  };

  // Outputs the game information into html elements
  return (
    <div className="game-details-container">
      <img src={gameAd.photoURL} />
      <h2>Titel: {gameAd.title}</h2>
      <h2>Pris: {gameAd.price} kr</h2>
      <p>Beskrivning: {gameAd.description}</p>
      <p>Genre: {gameAd.gameGenres}</p>
      <p>Antal Spelare: {gameAd.gamePlayers}</p>
      <p>Speltid: {gameAd.gamePlayTime} min</p>
      <p>Speltillverkare: {gameAd.gameCreator}</p>
      <p>Rekommenderad Ålder: {gameAd.gameRecommendedAge}</p>
      <p>Frakt: {gameAd.shippingCost} kr</p>

      <button className="cart-btn" onClick={handleAddToWishlist}>
        + Lägg till i önskelista
      </button>

      <ReusableButton>Lägg till i önskelista</ReusableButton>
    </div>
  );
};

export default GameAdDetails;
