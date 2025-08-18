import React, { useState } from 'react'

const CounterAdd1 = () => {
  const[numbers, setNumbers] = useState([1])
  
     const Increment = () => {
      //
      const nextNum = numbers + 1;
      setNumbers([...numbers, nextNum]);
    };
  
    const Decrement = () => {
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

export default CounterAdd1
