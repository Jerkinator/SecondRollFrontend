import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Searchbar.css";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [foundGames, setFoundGames] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!search) {
      alert("Sök efter nåt!");
      return;
    }

    try {
      fetch(`${import.meta.env.VITE_API_URL}/gameAds/findbytitle/` + search)
        .then((response) => response.json())
        .then((data) => setFoundGames(data));
      console.log(foundGames);
    } catch (err) {
      console.log("Error " + err);
    }
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Sök efter titel"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Sök!</button>
      <div className="search-results">
        {foundGames.map((g, i) => {
          return (
            <div className="search-results" key={i}>
              <Link to={`/gameads/${g.id}`}>
                <p>{g.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default Searchbar;

/*

OLD CODE, stored for now. 

const [games, setGames] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/gameAds/all`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setFilterData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(games);

  const handleFilter = (value) => {
    const result = filterData.filter((f) =>
      f.title.toLowerCase().includes(value)
    );
    setGames(result);
  };

  return (
    <div className="search-top">
      <div className="search-container">
        <input
          type="text"
          placeholder="Sök efter titel"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>
      <div className="search-results">
        {games.map((g, i) => {
          return (
            <div className="search-results" key={i}>
              <Link to={`/gameads/${g.id}`}>
                <p>{g.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );

*/
