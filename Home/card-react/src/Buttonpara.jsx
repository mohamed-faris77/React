import React from 'react'

const Buttonpara = () => {
  const handleClick = (name) => console.log(`Hello,  ${name}`)

  return (
    <div>
      <button onClick={()=>handleClick('Faris')}>Click me!</button>      
    </div>
  )
}

export default Buttonpara
