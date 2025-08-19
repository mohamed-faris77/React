import React from 'react'
import ListObjects from './ListObjects'

const ListProps = () => {
  const fruits=[{id:1, name:"Apple", calories:59},
                {id:2, name:"Orange", calories:65},
                {id:3, name:"Banana", calories:105},
                {id:4, name:"PineApple", calories:70},
                {id:5, name:"WaterMelon", calories:30}]
    
    const vegetables=[{id:6, name:"Carrot", calories:25},
                {id:7, name:"Betroot", calories:30},
                {id:8, name:"Cabbage", calories:70},
                {id:9, name:"Cucumber", calories:10},
                {id:10, name:"Corn", calories:75}]
  return (
    <div>
      <ListObjects items={fruits} category="Fruits"/>
      <ListObjects items={vegetables} category="Vegetables"/>
    </div>
  )
}

export default ListProps
