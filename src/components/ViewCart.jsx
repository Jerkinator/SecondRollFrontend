import { useState, useEffect } from "react";
import React from "react";

const ViewCart = () => {
  const [gameAd, setGameAd] = useState([]);
  const cartItems = JSON.parse(localStorage.getItem("cart"));

  const showCart = (e) => {
    setGameAd(cartItems);
    console.log(cartItems);
  };

  return (
    <div>
      <div>
        {gameAd?.map((g) => (
          <div className="filter-container" key={g.id}>
            <img src={g.photoURL} alt="" key={g.id} />
            <p>Titel: {g.title}</p>
            <p>Info: {g.description}</p>
          </div>
        ))}
      </div>
      <button onClick={showCart}> visakorg </button>
    </div>
  );
};

export default ViewCart;
