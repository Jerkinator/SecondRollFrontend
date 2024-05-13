import { useState, useEffect } from "react";
import FetchWishlist from "./FetchWishlist";

function ComplexState() {
  const [wishlist, setWishlist] = useState([]);

  var user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/users/wishlist/` + user.id,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => setWishlist(data));
  }, []);

  console.log(wishlist);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Önskelista</h1>
      {wishlist.map((g, i) => {
        return <FetchWishlist key={i} title={g.title} price={g.price} />;
      })}
    </div>
  );
}

export default ComplexState;
