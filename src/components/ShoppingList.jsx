import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ itemsData }) {
  const [selectedCategory, setselectedCategory] = useState("All");

  // Grabbing the value
  function handleAdd(e) {
    setselectedCategory(e.target.value);
  }

  // Filtering out the array
  const ItemToFilter = itemsData.filter((value) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return value.category === selectedCategory;
    }
  });

  return (
    <div className="Filter" style={{ marginTop: "20rem", marginLeft: "10rem" }}>
      <select name="filter" onChange={handleAdd}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul>
        {ItemToFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
