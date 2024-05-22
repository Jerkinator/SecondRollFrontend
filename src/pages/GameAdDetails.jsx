import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { gameAdImages } from "../data/gameAdImg";

import Heart from "react-animated-heart";
import ReusableButton from "../components/ReusableButton";

const GameAdDetails = () => {
  const { id } = useParams();
  const [gameAd, setGameAd] = useState([]);
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  // fetches the logged in users credentials
  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const getGameAd = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/gameAds/${id}`
      );
      setGameAd(res.data);
    };
    getGameAd();
  }, []);

  // Function for adding games to the shoppingcart array
  // First fetches the array from localstorage and puts all the objects into another local array
  // Then inserts that new array into the shoppingcart array in local storage
  // This is to not overwrite the existing games in the array
  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
      let cartArray = [];
      cartArray = JSON.parse(localStorage.getItem("cart") || "[]");
      cartArray.push(gameAd);

      localStorage.cart = JSON.stringify(cartArray);

      // Redirects user to wishlist when game has been added to wishlist.
      return navigate("/shoppingcart");
    } catch (err) {
      console.log("Error " + err);
    }
  };

  const gameAdImg = gameAdImages.find((image) => image.id === gameAd.id);

  const handleAddToWishlist = async () => {
    setClick(!click);
    try {
      const {} = await axios.put(
        `${import.meta.env.VITE_API_URL}/users/wishlist/` + user.id,
        {
          gameId: gameAd.id,
        },
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log("Error " + err);
    }
    console.log("Added");
  };

  // Outputs the game information into html elements
  return (
    <div className="game-details-container">
      {gameAdImg && <img src={gameAdImg.src} />}
      <div className="heart-icon">
        <Heart isClick={click} onClick={() => handleAddToWishlist()} />
      </div>
      <div className="gamead-info">
        <h2>Titel: {gameAd.title}</h2>
        <h2>Pris: {gameAd.price} kr</h2>
        <p>Beskrivning: {gameAd.description}</p>
        <p>Genre: {gameAd.gameGenres}</p>
        <p>Antal Spelare: {gameAd.gamePlayers}</p>
        <p>Speltid: {gameAd.gamePlayTime} min</p>
        <p>Speltillverkare: {gameAd.gameCreator}</p>
        <p>Rekommenderad Ålder: {gameAd.gameRecommendedAge}</p>
        <p>Frakt: {gameAd.shippingCost} kr</p>
        <p>Säljare: {gameAd.seller}</p>
      </div>
      <div className="reusable-button">
        <ReusableButton onClick={handleAddToCart}>
          Lägg i varukorg
        </ReusableButton>
      </div>
    </div>
  );
};

export default GameAdDetails;
