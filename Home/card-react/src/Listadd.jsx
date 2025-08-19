import React, { useState } from 'react'

const Listadd = () => {

  const [foods, setFoods] = useState(["Apple","Banana","Orange","Mango"]);

  const addFood = () => {
    const newFood = document.getElementById("inputFood").value;
    document.getElementById("inputFood").value = " ";
    setFoods([...foods, newFood])
  }
  const removeFood = (index) => {
   setFoods(foods.filter((_ , i )=> i !== index))
  }

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
       {foods.map((food, index) => <li key={index} onClick={() => removeFood(index)}>{food}</li>)}
        </ul>
       <input type="text" id="inputFood" placeholder='New food?'/>
       <button onClick={addFood}>Add Item</button>
      
     
    </div>
  )
}

export default Listadd
