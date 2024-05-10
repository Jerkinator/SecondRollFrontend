import Searchbar from "../components/Searchbar";
import React from "react";
import { ItemsData } from "../components/items";
import ShoppingList from "../components/ShoppingList";
import Filter from "../components/Filter";

const Home = () => {
  return (
    <div className="home-container">
      <Filter />
      {/*  <ShoppingList itemsData={ItemsData} /> */}
    </div>
  );
};

export default Home;
