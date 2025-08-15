import React from 'react'
import { useState } from 'react'

const Login = () => {
  const[userId, setUserId] = useState("")
  const[passWord, setPassWord] = useState("")
  const[showText, setShowText] = useState("")
  return (
    <div>
      <input type="text" value={userId}
      onChange={(e)=>{setUserId(e.target.value)}}/>
      <input type='password'value={passWord}
      onChange={(e)=>{setPassWord(e.target.value)}}/>
      
      
      <button onClick={()=>{setShowText(`${userId}   ${passWord}`)}}>Show Contents</button>
      
      <p>{showText}</p>
      
    </div>
  )
}

export default Login
