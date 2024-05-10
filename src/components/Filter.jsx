import React, { useState } from "react";
import Item from "./Item";
import { ItemsData } from "./items";
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
} from "semantic-ui-react";

const Filter = () => {
  const [selectedGenre, setselectedGenre] = useState("");
  const [items, setItems] = useState(ItemsData);

  const ItemToFilter = items.filter((value) => {
    if (selectedGenre === "All") {
      return true;
    } else {
      return value.genre === selectedGenre;
    }
  });

  // onChange finns på Dropdown, så det du har på select ska va på Dropdown
  function handleAdd(e) {
    setselectedGenre(e.target.value);
  }
  return (
    <div className="filter-container">
      <div className="dropdown-filterd">
        <div
          className="Filter"
          style={{ marginTop: "20rem", marginLeft: "10rem" }}
        >
          <select name="filter" onChange={handleAdd}>
            <option value="">Filter by genre</option>
            <option value="All">All Categories</option>
            <option value="Cardgame">Cardgame</option>
            <option value="Strategy">Strategy</option>
            <option value="Family">Family</option>
          </select>
          <ul>
            {ItemToFilter.map((item) => (
              <Item key={item.id} title={item.title} genre={item.genre} />
            ))}
          </ul>
        </div>

        {/*  <Dropdown placeholder="Select Item" fluid selection options={op} /> */}
        {/* <Dropdown
          inline
          defaultValue={itemsData[0].name}
          text="Find games by genre"
          icon="chess"
          floating
          labeled
          button
          className="icon"
          onChange={handleAdd}
          options={itemsData}
        > */}
        {/*  <DropdownMenu>
            <DropdownHeader
              value="All"
              icon="chess"
              content="  Search by Genre"
            />
            <DropdownDivider />

            <DropdownItem value="Produce" icon="quidditch" text="Produce" />
            <DropdownItem value="Dairy" icon="handshake outline" text="Dairy" />
            <DropdownItem value="Dessert" icon="magic" text="Dessert" />
          </DropdownMenu> */}
        {/*   </Dropdown> */}
      </div>
      {/*  {ItemToFilter.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))} */}
    </div>
  );
};

export default Filter;
// redirect to show ads when clicked
// look up how to display categorys dynamic?

{
  /* <DropdownItem value="family" icon="quidditch" text="Family" />
<DropdownItem icon="handshake outline" text="Strategy" />
<DropdownItem icon="magic" text="Fantasy" />
<DropdownItem icon="user secret" text="Adventure" />
<DropdownItem icon="clone outline" text="Card Game" />
<DropdownItem icon="chess rook" text="Role Play" />
<DropdownItem icon="transgender alternate" text="Adult" />
<DropdownItem icon="smile outline" text="Kids" />
<DropdownItem icon="bug" text="Science fiction" /> */
}
