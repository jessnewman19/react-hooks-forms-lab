import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formItem, setFormItem] = useState({ 
    name: "", 
    category: "Produce",
  })

  function handleFormChange (e) { 
    const {name, value} = e.target
    setFormItem({...formItem, [name]: value})
  }

  function handleSubmit (e) {
    e.preventDefault()
    onItemFormSubmit({...formItem, id: uuid()})
    setFormItem({ 
      name: "", 
      category: "Produce",
    })
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formItem.name}onChange ={(e) => handleFormChange(e)}/>
      </label>

      <label>
        Category:
        <select name="category" value={formItem.category} onChange={(e) => handleFormChange(e)}>
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
