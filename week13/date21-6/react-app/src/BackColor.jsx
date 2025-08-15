import React, { useState } from 'react'
import "./App.css"

const BackColor = () => {
  const[color, setColor]= useState("red")
  const [like,setLike]= useState("Like❤️")

  return (
    <>
    <div className='container' style={{backgroundColor: color}}>
      <button onClick={()=>{setColor(color === "red" ? "green" : "red" )}}>Change Color</button>
    
      <button onClick={()=>{setLike(like === "Like❤️" ? "DisLike💔" : "Like❤️")}}>{like}</button>
    </div>
    </>
  )
}

export default BackColor
