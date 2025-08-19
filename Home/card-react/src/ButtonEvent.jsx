import React from 'react'

const ButtonEvent = () => {
  const clicked = (e) => e.target.textContent ="Yean?"

  return (
    <div>
      <button onClick={(e) => clicked(e)}>Click this!</button>
    </div>
  )
}

export default ButtonEvent
