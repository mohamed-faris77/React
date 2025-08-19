import React from 'react'

const ListObjects = (props) => {

  const itemList = props.items;
  const category = props.category;
   
  const litems = itemList.filter(item => item.calories >= 70); 
  const liItems = itemList.filter(itm=> itm.calories<70);             
  const listItems = litems.map(litem => <li key={litem.id}>{litem.name}-{litem.calories}</li>)    
  const liIt = itemList.map(liit => <li>{liit.name}:{liit.calories}</li>)
  const liit = liItems.map(liit => <li>{liit.name}:{liit.calories}</li>)

  
  return (
    <div>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
      <ol>{liIt}</ol>
      <ol>{liit}</ol>
    </div>
  )
}

export default ListObjects


 