import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import Searchbar from "../components/Searchbar";
// import GameAdsComponent from "../components/GameAdsComponent";

// import Filter from "../components/Filter";

const Home = () => {
  const [gameAds, setGameAds] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  console.log(cart + "this is the cart");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const getGameAds = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/gameAds/all`
      );
      setGameAds(res.data);
      console.log(res.data);
      /*  const response = await fetch(
        `${import.meta.env.VITE_API_URL}/gameAds/all`
      );
      const data = response.json();
      setGameAds(data); */
    };
    getGameAds();
    /*  fetch(`${import.meta.env.VITE_API_URL}/gameAds/all`)
      .then((response) => response.json())
      .then((data) => setGameAds(data)); */
  }, []);

  return (
    <div className="home-container">
      <div className="game-grid">
        {gameAds.map((g, i) => {
          return (
            <div className="gameAd-container" key={i}>
              <Link to={`/gameAds/${g.id}`}>
                <img src={g.photoURL} />
                <p>Titel: {g.title}</p>
                <p>Pris: {g.price}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

//   <Filter />
