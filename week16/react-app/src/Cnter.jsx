import React, { useState } from 'react'

const Cnter = () => {
const[count,setCount] = useState([1])

const increment = () => {
  const nextNum = (count.length +1) 
  setCount([...count, nextNum])
}
const decrement = () => {
  if(count.length>1){
    setCount(count.slice(0,-1))
  }
}

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Cnter
