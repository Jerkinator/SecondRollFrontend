import React from "react";
import AxiosRollDice from "./AxiosRollDice";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src="images\logo.png" alt="SecondRoll logo" />
          </a>
        </div>
        <div className="profile">
          <a href="/profile">
            <img src="images\profile.png" alt="profile image" />
          </a>
        </div>
        <div className="cart">
          <a href="/shoppingcart">
            <img src="images\cart.png" alt="cart image" />
          </a>
        </div>
        <div>
          <AxiosRollDice />
        </div>
      </div>
    </header>
  );
}

export default Header;
