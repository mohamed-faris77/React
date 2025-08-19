import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='nav-bar'>
      <nav>
        <h1>My website</h1>
        <ul className='nav-main'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
