import React from 'react'

const ButtonFunction = () => {
  let count = 0;
  const butt = (name) => {
  if(count < 3){
    count++;
    console.log(`${name} You clicked me ${count} times`);
    
  }
  else{
    console.log(`${name}, Stop Clicking me`);
    
  }
}

  return (
    <div>
      <button onClick={() => butt("Faris")}>Click me</button>
    </div>
  )
}

export default ButtonFunction
