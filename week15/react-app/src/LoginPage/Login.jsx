import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Register from './Register'
import './Login.css'

const Login = () => {
  return (
    <div className='cont'>
      <input type="text" placeholder='UserName' className='inp'/>
      <input type="password" placeholder='Password' className='inp'/>
    <span>
      <input type="checkbox" id='chck'/>
      <label htmlFor="chck">Remember Me</label>
      <a href="#">Forgot password</a></span>
      <input type="Button" value="Log in" className='inp'/>
     <p> Or <Link to="/register">Register now!</Link></p> 
  

    </div>
  )
}

export default Login
