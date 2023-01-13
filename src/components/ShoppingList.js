import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const [search, setSearchFilter] = useState("");

  const onSearchChange = (e) => {
    setSearchFilter(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    //Category
    .filter((item) => selectedCategory === "All" ? true : item.category === selectedCategory)
    //Search
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  

  const displayedItems = (itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  )))



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
        onCategoryChange={handleCategoryChange} 
        search={search}
        setSearchFilter={setSearchFilter}
        onSearchChange={onSearchChange} 
      />
      <ul className="Items">
        {displayedItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
