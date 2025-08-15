import React, { useState } from 'react'

const Toggle = () => {

  const [toggle, setToggle]= useState("ON")
  return (
    <div>
      Switch :{toggle}
      <br/>
      <button onClick={()=>{ setToggle(toggle==="ON" ? "OFF" : "ON")}}>Toggle</button>
    </div>
  )
}

export default Toggle