import { useState } from "react";
import React from "react";
import Heart from "react-animated-heart";
import "./WishlistIcon.css";
import axios from "axios";

const WishlistIcon = ({ gameId }) => {
  const [click, setClick] = useState(false);
  const [shouldDelete, setDelete] = useState(false);

  let user = JSON.parse(localStorage.getItem("user"));

  const handleRemoveFromWishlist = async () => {
    try {
      const {} = await axios.delete(
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
    console.log("Removed");
  };

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
    console.log("Added");
  };

  const handleWishlistOnClick = async () => {
    setClick(!click);
    if (!shouldDelete) {
      await handleAddToWishlist();
    } else {
      await handleRemoveFromWishlist();
    }
    setDelete(!shouldDelete);
  };

  return (
    <div className="heart-icon">
      <Heart isClick={click} onClick={() => handleWishlistOnClick()} />
    </div>
  );
};

export default WishlistIcon;
