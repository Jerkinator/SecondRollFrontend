import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "./Sidebar.css";
export default (props) => {
  return (
    <Menu>
      <a className="menu" href="/about">
        Om oss
      </a>
      <a className="menu" href="/gameads">
        Köp
      </a>
      <a className="menu" href="/creategamead">
        Sälj
      </a>
      <a className="menu" href="/profile">
        Profil
      </a>
      <a className="menu" href="/faq">
        FAQ
      </a>
    </Menu>
  );
};
