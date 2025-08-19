import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {

  const[width,setWidth] = useState(window.innerWidth);
  const[height, setHeight]= useState(window.innerHeight);

  useEffect( () => {
    window.addEventListener("resize",handleSize)
  
    return()=> {
      window.removeEventListener("resize", handleSize);
    }
  },[])

  useEffect(()=>{
    document.title = `Scale : ${width} x ${height}`;
  } , [width, height])
  
  const handleSize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }



  return (
    <div>
      <p>Display Width{width}</p>
      <p>Display Height{height}</p>
    </div>
  )
}

export default UseEffect2
