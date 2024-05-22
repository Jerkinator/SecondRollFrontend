import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import { gameAdImages } from "../data/gameAdImg";

const Shoppingcart = () => {
  const navigate = useNavigate();
  /*retrieves items in cart from localstorage */
  const cartItems = JSON.parse(localStorage.getItem("cart"));

  /*retrieves buyer(logged in user) from localstorage */
  const buyer = JSON.parse(localStorage.getItem("user"));

  function clearShoppingCart() {
    localStorage.removeItem("cart");
    window.location.reload(true);
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
    <div className="filter-container">
      <h3>Varukorg</h3>
      {cartItems?.map((g) => (
        <div key={g.id} className="filter-box">
          <h3>{g.title}</h3>
          <p>pris: {g.price} kr</p>
          <p>frakt: {g.shippingCost}</p>
          <p>total: {g.price + g.shippingCost}</p>
          <p>Säljare: {g.seller}</p>
        </div>
      ))}
      <button className="cart-btn one" onClick={createOrder}>
        Slutför beställning!
      </button>
      <button className="cart-btn two" onClick={clearShoppingCart}>
        Töm varukorgen
      </button>
    </div>
  );
};
export default Shoppingcart;
