import React, { useState } from 'react'

const RandomColor = () => {
  const[color, setColor]= useState("white")

  function getRandom(){
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
  }
  return (
    <>
    <div>
      <button onClick = {()=> setColor(getRandom())}>Change Color</button>
    </div>
    </>
  )
}

export default RandomColor