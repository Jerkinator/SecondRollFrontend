import React, { useState, useEffect } from "react";
import Item from "./Item";
import { ItemsData } from "./items";
import axios from "axios";

const Filter = () => {
  const [selectedGenre, setselectedGenre] = useState("");
  const [items, setItems] = useState("");
  const [genre, setGenre] = useState([]);
  const [value, setValue] = useState("");

  /* const ItemToFilter = items.filter((value) => {
    if (selectedGenre === "All") {
      return true;
    } else {
      return value.genre === selectedGenre;
    }
  });

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value);
    //fetchGenre();
    console.log(value);
  }; */

  /*  useEffect(() => {
    const fetchGenre = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/gameAds/all`
      );
      const newData = await response.json();

      setGenre(newData);
    };
    fetchGenre();
  }, []); */

  useEffect(() => {
    if (value !== "") {
      const fetchGenre = async () => {
        const response = await fetch(
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

  /*  const fetchGenre = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/gameAds/findbygenre/${value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
    setGenre(data);
  }; */

  const handleAdd = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    // fetchGenre();
  };
  return (
    <div className="filter-container">
      <div className="dropdown-filterd">
        <div
          className="Filter"
          style={{ marginTop: "20rem", marginLeft: "10rem" }}
        >
          <select name="filter" onChange={handleAdd}>
            <option defaultValue="" value="">
              Filter by genre
            </option>
            <option value="Cardgame">Cardgame</option>
            <option value="Strategy">Strategy</option>
            <option value="Family">Family</option>
          </select>
        </div>
      </div>
      <div>
        {genre?.map((g) => (
          <div key={g._id}>
            <p>{g.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
// redirect to show ads when clicked
// look up how to display categorys dynamic?
