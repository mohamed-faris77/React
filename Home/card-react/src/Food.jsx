import React from 'react'

const Food = () => {

  let food1 = 'Apple';
  let food2 = 'Orange';
  return (
    <div>
      <ul>
        <li>Banana</li>
        <li>{food1.toUpperCase()}</li>
        <li>{food2.toLowerCase()}</li>
      </ul>
    </div>
  )
}

export default Food
