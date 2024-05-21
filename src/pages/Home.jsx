import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import Filter from "../components/Filter";

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
    };
    getGameAds();
  }, []);

  return (
    <div className="home-container">
      <Searchbar />
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
      <Filter />
    </div>
  );
};

export default Home;
