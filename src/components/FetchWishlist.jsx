import { useState, useEffect } from "react";

function FetchWishlist({ title, price }) {
  return (
    <div className="wishlist-container">
      <p>Titel: {title}</p>
      <p>Pris: {price}</p>
    </div>
  );
}

export default FetchWishlist;
