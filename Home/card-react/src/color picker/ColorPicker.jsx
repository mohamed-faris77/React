import React, { useState } from 'react'
import './Colorpicker.css'
const ColorPicker = () => {

  const[color,setColor] = useState('#FFFFFF')

  const updateColor = (e) =>{
    setColor(e.target.value)
  }
  return (
    <div >
      <div className='container' style={{backgroundColor: color}}></div>
      <input type="color" value={color} onChange={updateColor}/>
    </div>
  )
}

export default ColorPicker
