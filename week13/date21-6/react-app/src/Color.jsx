import React, { useState } from 'react'

const Color = () => {
  const[color, setColor]=useState("Blue")
  return (
    <div>
      <h2>My favorite color is : {color}</h2>
      <button onClick={()=>{setColor("Red")}}>Click</button>
    </div>
  )
}

export default Color
