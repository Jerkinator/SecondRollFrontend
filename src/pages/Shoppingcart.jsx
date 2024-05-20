import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

/*-Isolate gamead id and logged in user id to create order and send to endpoint.
  -Create button to remove gameAd from shoppingcart.
  -Write funcytionality that clears localstorage after order is created.
  -Empty Cart message that becomes hidden when Cart is not empty.*/

const Shoppingcart = () => {
  // const [gameAd, setGameAd] = useState([]);

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
    // setOrder({ buyerId: buyer.id, gameAdIds: gameIds });
    // console.log(order);
    // setOrder({ buyerId: buyer.id, gameAdIds: gameIds });
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

      alert("Order created!");
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

/* const showCart = (e) => {
    setGameAd(cartItems);
    // console.log("cart item: " + cartItems);
    // console.log("buyer: " + JSON.parse(buyer));
  }; */
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
