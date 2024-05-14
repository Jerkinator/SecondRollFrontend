import React, { useState, useEffect } from "react";

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
          className="Filter"
          style={{ marginTop: "20rem", marginLeft: "10rem" }}
        >
          {/* calls handleAdd function when changed */}
          <select name="filter" onChange={handleAdd}>
            <option defaultValue="" value="">
              Filter by genre
            </option>
            <option value="Adventure">Adventure</option>
            <option value="Family">Family</option>
            <option value="Role Play">Role Play</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Adult">Adult</option>
            <option value="Card Game">Card Game</option>
            <option value="Strategy">Strategy</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
      </div>
      {/*defines what is shown from filter result */}
      <div>
        {genre?.map((g) => (
          <div key={g.id}>
            <p>
              {g.title}
              {g.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
