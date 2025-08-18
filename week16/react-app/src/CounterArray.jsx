import React, { useState } from 'react'

const CounterArray = () => {
const[numbers, setNumbers] = useState([0])

   const Increment = () => {
    // This function will add the next number based on the current length of the array
    // Instead of appending a string, we append the next number based on the array length
    const nextNumber = numbers.length;
    setNumbers([...numbers, nextNumber]);
  };

  const Decrement = () => {
    // This function will remove the last number from the array if there are more than one
    // It checks the length of the array before slicing
    // This prevents the array from becoming empty
    if (numbers.length > 1) {
      setNumbers(numbers.slice(0, -1));
    }
  };

  return (
    <div>
      <button onClick={Increment}>+</button>
      <span>{numbers}</span>
      <button onClick={Decrement}>-</button>
    </div>
  )
}

export default CounterArray

//output : initially it will show 0, when you click + it will show 0,1,2,3... and so on
// when you click - it will remove the last number, so it will show 0,1,2... and so on
