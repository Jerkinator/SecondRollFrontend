import { useState } from "react";
import React from "react";
import Heart from "react-animated-heart";
import "./WishlistIcon.css";
import axios from "axios";

const WishlistIcon = ({ gameId }) => {
  const [click, setClick] = useState(false);
  const [shouldDelete, setDelete] = useState(false);

  let user = JSON.parse(localStorage.getItem("user"));

  const handleAddToWishlist = async () => {
    setClick(!click);
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
    console.log("Added");
  };

  return (
    <div className="heart-icon">
      <Heart isClick={click} onClick={() => handleAddToWishlist()} />
    </div>
  );
};

export default WishlistIcon;
