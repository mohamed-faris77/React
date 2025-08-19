import React from 'react'

const Profilepic = () => {

  const image = './src/download.jpg'
  const handleClick = (e) => e.target.style.display = "none";
  return (
    <>
      <img  src={image}  onClick={(img) => handleClick(img)} alt="Profile pic" />    
    </>
  )
}

export default Profilepic
