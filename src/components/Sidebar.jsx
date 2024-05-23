import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "./Sidebar.css";
import LogoutComponent from "./LogoutComponent";

export default (props) => {
  return (
    <Menu>
      <a className="menu" href="/login">
        Logga in
      </a>
      <a className="menu" href="/">
        Hem
      </a>
      <a className="menu" href="/creategamead">
        Sälj
      </a>
      <a className="menu" href="/profile">
        Profil
      </a>
      <a className="menu" href="/about">
        Om oss
      </a>
      <a onClick={LogoutComponent} className="menu" href="/">
        Logga Ut
      </a>
    </Menu>
  );
};
