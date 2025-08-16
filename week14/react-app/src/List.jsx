import React from 'react'

const List = () => {
  const list =[1,2,3,4,5]
  const ListOfObjects = [{name : 'Apple'},{name : 'Banana'},{name: 'Orange'}]
  const listItems = list.map(num => <li>{num}</li>)
  const listofobj = ListOfObjects.map(val => <li>{val.name}</li>)
  return (
    <div>
      <ul>{listItems}</ul>
      <ol>{listofobj}</ol>
    </div>
  )
}

export default List

