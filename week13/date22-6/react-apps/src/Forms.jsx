import React, { useState } from 'react'

const Forms = () => {
  const[name, setName] = useState("")
  const[age, setAge] = useState("")
  const[bio, setBio] = useState("")



  return (
    <div>
      <input type="text" value={name} 
      onChange={(e)=>{setName(e.target.value)}}/>
      <br/>
      <input type="number" value={age}
      onChange={(e)=>{setAge(e.target.value)}}/>
      <br/>
      <input type="text" value={bio}
      onChange={(e)=>setBio(e.target.value)}/>
      <br/>
      <p>
        {name}
        <br/>
        {age}
        <br/>
        {bio}
      </p>
    </div>
  )
}

export default Forms
