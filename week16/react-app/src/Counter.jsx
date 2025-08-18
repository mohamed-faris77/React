import React, { useState } from 'react'

const Counter = () => {

  const[count, setCount] = useState("0")

   const Increment = () => {
    const nextNumber = count.length;
    setCount(count + nextNumber);
  };

  const Decrement = () => {
    if (count.length > 1) {
      setCount(count.slice(0, -1));
    }
  };

  return (
    <div>
      <button onClick={Increment}>+</button>
      <span>{count}</span>
      <button onClick={Decrement}>-</button>
    </div>
  )
}

export default Counter
