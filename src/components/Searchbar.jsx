import { Input } from "semantic-ui-react";
import { useState } from "react";
import "./Searchbar.css";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState([]);

  const fetchGames = (value) => {
    fetch(`${import.meta.env.VITE_API_URL}/gameAds/findbytitle/` + value)
      .then((response) => response.json())
      .then((data) => setResult(data));
  };

  const handleChange = (value) => {
    setSearchInput(value);
    fetchGames(value);
  };

  return (
    <div className="search-container">
      <Input
        fluid
        icon="search"
        placeholder="Sök efter titel..."
        value={searchInput}
        className="searchbar"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

/*
const Searchbar = () => {
  return (
    <Input
      icon="search"
      placeholder="Sök efter titlar..."
      className="searchbar"
    />
  );
}; 

  <Link to="/gameadpreview" state={{ game: id }}>
              Go to game
            </Link>
            
            */

export default Searchbar;
