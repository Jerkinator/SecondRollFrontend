import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../components/Searchbar";

const Home = () => {
  const [gameAds, setGameAds] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const getGameAds = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/gameAds/all`
      );
      setGameAds(res.data);
    };
    getGameAds();
  }, []);

  const [genre, setGenre] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    //if the value is === an empty string it doesnt render the fetchGenre function
    //but as soon as the value is set it runs and calls the find by genre endpoint.
    if (value !== "") {
      const fetchGenre = async () => {
        const response = await fetch(
          //${value} is changed depending on choice in option list so its dynamic
          `${import.meta.env.VITE_API_URL}/gameAds/findbygenre/${value}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setGenre(data);
      };
      fetchGenre();
    }
  }, [value]);

  //Picking up the chosen category from option list and sets choice = value
  const handleAdd = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="home-container">
      {/* <Searchbar /> */}
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
      <div className="filter-container">
        <div className="dropdown-filterd">
          <div
            className="Dropdown"
            /* style={{ marginTop: "30rem", marginLeft: "30rem" }} */
          >
            {/* calls handleAdd function when changed */}
            <select id="filter" name="filter" onChange={handleAdd}>
              <option defaultValue="" value="">
                Visa genre
              </option>

              <option value="family">Familj</option>
              <option value="strategy">Strategi</option>
              <option value="cardgame">Kortspel</option>
              <option value="roleplay">Rollspel</option>
              <option value="adventure">Äventyr</option>
              <option value="fantasy">Fantasy</option>
              <option value="kids">Barn</option>
              <option value="scifi">Sci-Fi</option>
              <option value="other">Övriga spel</option>
            </select>
          </div>
        </div>
        {/*defines what is shown from filter result */}
        <div>
          {genre?.map((g, i) => (
            <div className="filter-container" key={i}>
              <Link to={`/gameads/${g.id}`}>
                <img src={g.photoURL} alt="" />
                <p>Titel: {g.title}</p>
                <p>Info: {g.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
