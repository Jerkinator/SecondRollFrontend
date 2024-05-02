import { Input } from "semantic-ui-react";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="search-container">
      <Input
        fluid
        icon="search"
        placeholder="Sök efter titel..."
        className="searchbar"
      />
    </div>
  );
};

/*
const Searchbar = () => {
  return (
    <Input
      icon="search"
      placeholder="Sök efter titlar..."
      className="searchbar"
    />
  );
}; */

export default Searchbar;
