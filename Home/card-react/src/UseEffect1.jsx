import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {

  const[count,setCount] = useState(0);
  const[color,setColor] = useState('green');

  useEffect( () =>{
    document.title = `Count : ${count} ${color}`
  }, [count,color]
  );

  const addCount = () => {
    setCount(count + 1);
  }

  const changeColor = () => {
    setColor( c => c === 'green' ? 'red' : 'green')
  }

  return (
    <div>
      <p style={{color : color}}>Count : {count}</p>
      <button onClick={addCount}>Add</button>

      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default UseEffect1
