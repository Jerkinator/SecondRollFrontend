import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ViewCart = () => {
  const [gameAd, setGameAd] = useState([]);
  const cartItems = JSON.parse(localStorage.getItem("cart"));

  const showCart = (e) => {
    setGameAd(cartItems);
    console.log(cartItems);
  };

  /*   useEffect(() => {
    if (gameAd === "") {
      return <h1>korgen är tom</h1>;
    } */
  /*  if (gameAd !== "") {
       showCart(); 
    } 
  }, []);*/

  return (
    <div>
      <div>
        <button onClick={showCart}>tryck här</button>
        {gameAd?.map((g) => (
          <div className="filter-container" key={g.id}>
            <img src={g.photoURL} alt="" key={g.id} />
            <p>Titel: {g.title}</p>
            <p>Info: {g.price}</p>
            <p>Säljare: {g.seller}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCart;
