import React, { useState } from 'react'

const Counter = () => {
  const[num, setNum] = useState(0)
  
  const increment = () => {
    setNum(num +1)
  }

  const reset = () => {
    setNum(0)
  }

  const decrement = () => {
     setNum(num -1) 
  }

  return (
    <div>
      <p>{num}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
