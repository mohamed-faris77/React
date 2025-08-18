import React, { useState } from 'react'

const CounterAddnum = () => {
  const[count, setCount] = useState("1")

   const Increment = () => {
    // Increment the count by adding "1" to the current count
    // This will effectively treat the count as a string and append "1"
    setCount(count + "1");
  };

  const Decrement = () => {
    // If the count is longer than 1 character, remove the last character
    // This prevents the count from becoming empty
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

export default CounterAddnum

// This component will start with "1" and when you click + it will show "11", "111", etc.
// When you click - it will remove the last "1", so it will show "11", "1", and so on.