import React, { useState } from 'react'

const Form = () => {
  const[count, setCount]= useState(0)
  
  function increment(){
    setCount(prevCount => prevCount + 1)

  }
  function decrement(){
    setCount(prevCount => prevCount - 1)
  }


  return (
    <div>
      <button onClick={increment}>Increment</button>
      <span>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export
 default Form












