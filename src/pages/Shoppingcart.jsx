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
  const [order, setOrder] = useState({
    buyerId: "",
    gameAdIds: [],
  });

  const navigate = useNavigate();

  const cartItems = JSON.parse(localStorage.getItem("cart"));
  // i cartItems finns allt men du vill filtrera nerså du bara har id (filter() eller kanske find())
  // gör ny variabel och spara ner det filtrerade värdet
  /* const gameIds = cartItems.find(cart.id);*/
  const gameIds = cartItems.map((a) => a.id);

  const buyer = JSON.parse(localStorage.getItem("user"));
  // samma sak gäller för user du vill bara ha id
  /* const buyerId = buyer.get(); */
  /* const buyerId = buyer.map((a) => a.id);
  console.log("Buyer Id: " + buyerId); */
  /* 
  console.log(
    "gameid: " + gameIds,
    "buyer id: " + buyer.id,
    "inside cart: " + cartItems
  ); */

  /*  useEffect(() => {
    setOrder({ buyerId: buyer.id, gameAdIds: gameIds });
  }, []);
 */
  const createOrder = async () => {
    // setOrder({ buyerId: buyer.id, gameAdIds: gameIds });
    // console.log(order);
    // setOrder({ buyerId: buyer.id, gameAdIds: gameIds });
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

      // Redirects user to Home when logged in.
      return navigate("/");
    } catch (err) {
      console.log("Error " + err);
    }
  };

  return (
    <div>
      <button onClick={createOrder}>Order Items</button>
      <div>
        {cartItems?.map((g) => (
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
