import React from 'react'

const Filter = () => {
   const fruits=[{id:1, name:"Apple", calories:59},
                {id:2, name:"Orange", calories:65},
                {id:3, name:"Banana", calories:105},
                {id:4, name:"PineApple", calories:70},
                {id:5, name:"WaterMelon", calories:30}]
 
   const listItems = fruits.filter(fruit => fruit.calories>60);
   const finalList = listItems.map(item => <li>{item.name} : {item.calories}</li> );             
   return (
    <div>
      <ol>{finalList}</ol>
    </div>
  )
}

export default Filter

 