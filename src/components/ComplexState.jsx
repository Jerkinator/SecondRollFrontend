import { useState, useEffect } from "react";
import FetchWishlist from "./FetchWishlist";

const initWishlist = [{ title: null, price: null }];

function ComplexState() {
  const [wishlist, setWishlist] = useState(initWishlist);

  var user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // Function to get data from our backend API.
    const getWishlist = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/wishlist/` + user.id,

        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();

      // Update the state with response.
    };

    // Load SecondRoll wishlist-data from API when component mounts.
    getWishlist();
    console.log(wishlist);
  }, []);

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
