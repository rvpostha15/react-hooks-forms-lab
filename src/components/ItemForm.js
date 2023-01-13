import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [name, setName  ] = useState("")
  const [category, setCategory] = useState()

  function handleSubmit(event) {
    event.preventDefault()
    // console.log(event.target.name.value)
    // console.log(event.target.category.value)
  
    onItemFormSubmit({
        id: uuid(), // the `uuid` library can be used to generate a unique id
        name,
        category,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={event => setName(event.target.value)}/>
      </label>

      <label>
        Category:
        <select 
          name="category"
          value={category}
          onChange={event => setCategory(event.target.value)} 
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
