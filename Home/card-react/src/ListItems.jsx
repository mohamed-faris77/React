import React from 'react'

const ListItems = () => {
  const fruits=['Apple','Mango','Banana','pineApple']
  const listItem = fruits.map((fruit)=><li>{fruit}</li>)
  
  
  return (
      <ol>{listItem}</ol>
  )
}

export default ListItems
