import React, { useState } from 'react'

const CharCounter = () => {

  const[text, setText] = useState("")
  


  const updateChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <textarea onChange={updateChange} id='text'  maxLength={200}></textarea>
      <p>{text .length} </p>     
    </div>
  )
}

export default CharCounter
