import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
        <img src="images\logo.png" alt="SecondRoll logo" />
        </a>

        <div className="profile-cart">
          <a href="/profile">
          <img src="images\profile.png" alt="profile image" />
          </a>
          <a href="/shoppingcart">
          <img src="images\cart.png" alt="cart image" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
