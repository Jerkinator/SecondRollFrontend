import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Filter = () => {
  const [items, setItems] = useState("");
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
        console.log(data);
        setGenre(data);
      };
      fetchGenre();
    }
  }, [value]);

  //Picking up the chosen category from option list and sets choice = value
  const handleAdd = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
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
        {genre?.map((g) => (
          <Link to={`/gameads/${g.id}`}>
            <div className="filter-container" key={g.id}>
              <img src={g.photoURL} alt="" key={g.id} />
              <p>Titel: {g.title}</p>
              <p>Info: {g.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filter;

// redirect to show ads when clicked
// look up how to display categorys dynamic?
