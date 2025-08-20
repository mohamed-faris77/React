import React, { useState } from 'react'

const Form2 = () => {
  const[name, setName] = useState('')
  const[pass, setPass] = useState('')

  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)} />
      <input type="password" onChange={(e)=>setPass(e.target.value)}/>

      <br></br>
      <p>UserName :{name} </p>
      <p>Password :{pass} </p>

    </div>
  )
}

export default Form2
