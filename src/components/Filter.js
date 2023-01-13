import React from "react";

function Filter({ onCategoryChange, search, onSearchChange, setSearchFilter }) {



  return (
    <div className="Filter">

{/* My New Filter Search Input */}
      <input
      onChange={onSearchChange} 
      type="text" 
      name="search" 
      placeholder="Search..."
      value={search} 
      />


      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
