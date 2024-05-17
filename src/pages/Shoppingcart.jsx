import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

/*-Isolate gamead id and logged in user id to create order and send to endpoint.
  -Create button to remove gameAd from shoppingcart.
  -Write funcytionality that clears localstorage after order is created.
  -Empty Cart message that becomes hidden when Cart is not empty.*/

const Shoppingcart = () => {
  const [gameAd, setGameAd] = useState([]);
  const [order, setOrder] = useState([]);
  const cartItems = JSON.parse(localStorage.getItem("cart"));
  const buyer = JSON.parse(localStorage.getItem("user"));

  const showCart = (e) => {
    setGameAd(cartItems);
    console.log(cartItems);
    console.log(buyer);
  };
  /*  const adId = gameAd?.map((gameAd.id) => (
    setOrder(adId)
 )); */

  /*  const adId = gameAd.map((gameAd) => {
    setOrder(gameAd.id);
    console.log(adId);
  });
  const showId = (e) => {
    console.log(adId);
  };
 */
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
export default Shoppingcart;
