import React, { useState } from 'react'

const State1 = () => {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(prevCount => prevCount + 1)
  }

  function decrement(){
        setCount(prevCount => prevCount -1 )

  }

  return (
    <div>
      <button onClick={increment}>Increment(+1)</button>
      <span>{count}</span>
      <button onClick={decrement}>Decrement(-1)</button>    
    </div>
  )
}

export default State1
