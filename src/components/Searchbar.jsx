import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Searchbar.css";

const Searchbar = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/gameAds/all`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setFilterData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (value) => {
    const result = filterData.filter((f) =>
      f.title.toLowerCase().includes(value)
    );
    setData(result);
    if (value === "") {
      setData([]);
    }
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
        {data.map((g) => (
          <Link to={`/gameads/${g.id}`}>
            <div key={g.id}>{g.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
