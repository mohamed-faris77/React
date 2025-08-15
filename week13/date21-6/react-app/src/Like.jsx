import React, { useState } from 'react'
import "./App.css"

const Like = () => {
const [like,setLike]= useState("Like❤️")

  return (
    <>
    <div className='container'>
      <button onClick={()=>{setLike(like === "Like❤️" ? "DisLike💔" : "Like❤️")}}>{like}</button>
    </div>
    </>
  )
}

export default Like
