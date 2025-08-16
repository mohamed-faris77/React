import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // initial value

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};