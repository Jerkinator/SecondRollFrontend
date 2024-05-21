import { useState, useEffect } from "react";
import GameAdPreview from "../pages/GameAdPreview";
import { Link } from "react-router-dom";

//TODO: sätt en prop på link också tex to={to}

function FetchWishlist({ title, price, id }) {
  return (
    <div className="wishlist-container">
      <Link to={`/gameads/${id}`}>Go to game</Link>
      <p>Titel: {title}</p>
      <p>Pris: {price}</p>
    </div>
  );
}

export default FetchWishlist;
