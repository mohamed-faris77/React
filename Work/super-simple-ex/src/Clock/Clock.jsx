import React, { useEffect, useState } from 'react'
import './clock.css'

const Clock = () => {

  const [time,seTime] = useState()

  useEffect( () => {} , [])

  return (
    <div className='clock-container'>
      <p className='clock'>
        <span>00:00:00</span>
      </p>
      
    </div>
  )
}

export default Clock
