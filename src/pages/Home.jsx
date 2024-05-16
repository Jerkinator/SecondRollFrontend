import { useState } from "react";

import Searchbar from "../components/Searchbar";

import React from "react";

import Filter from "../components/Filter";

const Home = () => {
  return (
    <div className="home-container">
      <Searchbar />
      <Filter />
    </div>
  );
};

export default Home;
