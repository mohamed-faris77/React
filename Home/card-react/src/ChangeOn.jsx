import React, { useState } from 'react'

const ChangeOn = () => {
  
  const [text, setText] = useState("")
  const [num, setNum] = useState(1)
  const [textArea , setTextArea] = useState(" ")
  const [select, setSelect] = useState("")
  const [radio, setRadio] = useState("")
  
  
  const updateInputText = (e) => {
    setText(e.target.value)
  }

  const updateInputNum = (e) => {
    setNum(e.target.value)
  }

  const updateInputTextarea = (e) => {
    setTextArea(e.target.value)
  }

  const updateInputSelect = (e) => {
    setSelect(e.target.value)
  }
   const updateInputRadio = (e) => {
    setRadio(e.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={updateInputText} placeholder='Name'/>
      <p>{text}</p>
      <input type="number" value={num} onChange={updateInputNum} />
      <p>{num}</p> 
      <textarea value={textArea} onChange={updateInputTextarea} placeholder='Comments'></textarea>
      <p>{textArea}</p> 

      <select value={select} onChange={updateInputSelect}>
      <option value = "">Select an option</option>
      <option value="Visa">Visa</option>
      <option value="Master Card">Master Card</option>
      <option value="Gift Card">Gift Card</option>  
      </select>   
      <p>{select}</p>  

      <label>  <input value='COD' checked={radio === 'COD'} type="radio" onChange={updateInputRadio}/> COD</label>
     <br />
      <label> <input value='Prepaid' checked={radio === 'Prepaid'} type="radio"  onChange={updateInputRadio}/> Prepaid</label>
     <br />
     <label>  <input value='Postpaid' checked={radio === 'Postpaid'} type="radio"  onChange={updateInputRadio}/> Postpaid</label>
     <br />
      <p>{radio}</p>
    </div>
  )
}

export default ChangeOn
