import React from "react";

function Item({ title, genre }) {
  return (
    <li className="item">
      <span>{title}</span>
      <span>{genre}</span>
    </li>
  );
}

export default Item;
