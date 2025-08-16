import React from 'react'
import { ThemeProvider } from './ThemeContext'
import Home from './Home'
import UseToggle from './UseToggle'

const App = () => {
  const[isVisible, toggleVisibility] = UseToggle();
  return (
    <div>
      {/* <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>This is a toggled Text</p>} */}

      <button onClick={toggleVisibility}>
       Log {isVisible ? 'out' : 'in'} 
      </button><br />
      {/* {!isVisible && <p>Please Login</p> }
      {isVisible && <p>Welcome Back</p> } */}
      {!isVisible ? "Please Login": "Welcome Back"}
    </div>
      // <ThemeProvider>
      //   <Home/>
      // </ThemeProvider>
  )
}

export default App
