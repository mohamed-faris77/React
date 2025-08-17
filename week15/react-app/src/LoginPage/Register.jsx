import React from 'react'
import Login from './Login'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const Register = () => {
  return (
    <div className='cont'>

      <input type="text" placeholder='Enter a Username' className='inp' />
      <input type="Password" placeholder='Entera password' className='inp' />
      <input type="password" placeholder='Re-enter your password' className='inp' />
      <input type="button" value="Submit" className='inp' />
      <p> Already have an account?<Link to="/login">Sign In!</Link></p>


    </div>
  )
}

export default Register
