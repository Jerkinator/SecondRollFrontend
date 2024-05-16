import { useState } from "react";
import React from "react";
import Heart from "react-animated-heart";
import "./WishlistIcon.css";
import axios from "axios";

const WishlistIcon = ({ gameId }) => {
  const [click, setClick] = useState(false);

  var user = JSON.parse(localStorage.getItem("user"));
  console.log(gameId);

  const handleAddToWishlist = async () => {
    try {
      const {} = await axios.put(
        `${import.meta.env.VITE_API_URL}/users/wishlist/` + user.id,
        {
          gameId: gameId,
        },
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log("Error " + err);
    }
    setClick(!click);
  };

  return (
    <div className="heart">
      <Heart isClick={click} onClick={() => handleAddToWishlist()} />
    </div>
  );
};

export default WishlistIcon;
