import React, { useState } from 'react'
import './App.css'

const Form = () => {
  const[color, setColor]= useState('red')
  

  return (
    <div className='BackColor' style={{backgroundColor: color }}>
      <button onClick={()=> setColor( color=="red" ? "green" : "red")}>ChangeColor</button>      
    </div>
  )
}

export
 default Form












