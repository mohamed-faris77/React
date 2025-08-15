import React, { useEffect, useState } from 'react'

const Counters = () => {
  const[count , setCount]= useState(0);

  useEffect(()=>{
    console.log(`Counter updated to : ${count}`);
  },[count]);
  document.title = `Count: ${count}`
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counters
