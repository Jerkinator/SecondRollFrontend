import { useState } from "react";
import React from "react";
import Heart from "react-animated-heart";
import "./WishlistIcon.css";

function WishlistIcon() {
  const [click, setClick] = useState(false);
  return (
    <div className="heart">
      <Heart isClick={click} onClick={() => setClick(!click)} />
    </div>
  );
}

export default WishlistIcon;
