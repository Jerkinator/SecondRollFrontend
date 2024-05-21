import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

const Shoppingcart = () => {
  const navigate = useNavigate();
  /*retrieves items in cart from localstorage */
  const cartItems = JSON.parse(localStorage.getItem("cart"));

  /*retrieves buyer(logged in user) from localstorage */
  const buyer = JSON.parse(localStorage.getItem("user"));

  function clearShoppingCart() {
    localStorage.removeItem("cart");
    // window.location.reload(false);
    /*  console.log("cart cleared"); */
  }

  const createOrder = async () => {
    /*If cartItems is not an empty array it retrieves the ids of the game ads  */
    let gameIds = [];
    if (cartItems !== "") {
      gameIds = cartItems.map((a) => a.id);
      console.log("cart is not empty");
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/orders`,
        {
          buyerId: buyer.id,
          gameAdIds: gameIds,
        },
        { withCredentials: true }
      );

      alert("Din order är nu skapad!");
      /*Clears cart in local storage after order is created*/
      localStorage.removeItem("cart");

      // Redirects user to Home when order has been created
      return navigate("/");
    } catch (err) {
      console.log("Error " + err);
    }
  };

  return (
    <div>
      <div>
        {cartItems?.map((g) => (
          <div key={g.id} className="filter-container">
            <img src={g.photoURL} alt="" />
            <p>Titel: {g.title}</p>
            <p>Info: {g.price}</p>
            <p>Säljare: {g.seller}</p>
          </div>
        ))}
      </div>
      <button onClick={createOrder}>Slutför beställning!</button>
    </div>
  );
};
export default Shoppingcart;
