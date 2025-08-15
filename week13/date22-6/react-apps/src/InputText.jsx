import React, { useState } from 'react'

const InputText = () => {
const[input, setInput]=useState("")


  return (
    <div>
      <input className='inpBox' type="text" value={input} 
      onChange={(e)=> setInput(e.target.value)}/>
      <p className='para'>{input}</p>
    </div>
  )
}

export default InputText
