/* import Searchbar from "../components/Searchbar"; */
import GameAdsComponent from "../components/GameAdsComponent";
import React from "react";

import Filter from "../components/Filter";

const Home = () => {
  return (
    <div className="home-container">
      <div className="game-grid" >     
      <GameAdsComponent />
      </div> 

      <Filter />
    </div>
  );
};

export default Home;
