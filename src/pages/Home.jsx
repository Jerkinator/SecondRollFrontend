import Searchbar from "../components/Searchbar";
import React from "react";
import { ItemsData } from "../components/items";
import ShoppingList from "../components/ShoppingList";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Shopster</h1>
      </header>
      <Filter ItemsData={ItemsData} />
      {/* <ShoppingList itemsData={ItemsData} /> */}
    </div>
  );
};

export default Home;
