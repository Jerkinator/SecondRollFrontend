import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Heart from "react-animated-heart";

const GameAdDetails = () => {
  const { id } = useParams();
  const [gameAd, setGameAd] = useState([]);
  const navigate = useNavigate();

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

  // Fetches the clicked game's data and puts it in the const gameAd
  /* fetch(
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
      .then((data) => setGameAds(data)); */

  // Uses the fetched users id and puts it in the endpoint of the put request
  // Then uses the Id of the game and sends it along in the body
  /* const handleAddToWishlist = async (e) => {
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
  }; */

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

  const [click, setClick] = useState(false);
  const [shouldDelete, setDelete] = useState(false);

  const handleRemoveFromWishlist = async () => {
    try {
      const {} = await axios.delete(
        `${import.meta.env.VITE_API_URL}/users/wishlist/` + user.id,
        {
          gameId: gameAd.id,
        },
        {
          credentials: "include",
        }
      );
    } catch (err) {
      console.log("Error " + err);
    }
    console.log("Removed");
  };

  const handleAddToWishlist = async () => {
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

  const handleWishlistOnClick = async () => {
    setClick(!click);
    if (!shouldDelete) {
      await handleAddToWishlist();
    } else {
      await handleRemoveFromWishlist();
    }
    setDelete(!shouldDelete);
  };

  // Outputs the game information into html elements
  return (
    <div className="game-details-container">
      <img src={gameAd.photoURL} />
      <div>
        <h2>Titel: {gameAd.title}</h2>
        <div className="heart-icon">
          <Heart isClick={click} onClick={() => handleWishlistOnClick()} />
        </div>
      </div>

      <h2>Pris: {gameAd.price} kr</h2>
      <p>Beskrivning: {gameAd.description}</p>
      <p>Genre: {gameAd.gameGenres}</p>
      <p>Antal Spelare: {gameAd.gamePlayers}</p>
      <p>Speltid: {gameAd.gamePlayTime} min</p>
      <p>Speltillverkare: {gameAd.gameCreator}</p>
      <p>Rekommenderad Ålder: {gameAd.gameRecommendedAge}</p>
      <p>Frakt: {gameAd.shippingCost} kr</p>
      <p>Säljare: {gameAd.seller}</p>

      <button onClick={handleAddToCart}>Lägg i varukorg</button>

      <button className="cart-btn" onClick={handleAddToWishlist}>
        Lägg till i önskelista
      </button>
      <button className="cart-delete" onClick={handleRemoveFromWishlist}>
        Ta bort från önskelista
      </button>
    </div>
  );
};

export default GameAdDetails;
