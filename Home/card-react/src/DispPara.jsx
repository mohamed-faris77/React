import React, { useState } from 'react'

const DispPara = () => {
  const [para, setPara] = useState()

  const showContents = () => {
    setPara("This is details")
  }

  const hideContents = () => {
    setPara(" ");
  }

  return (
    <div>
      <p>{para}</p>
      <button onClick={showContents}>Show details</button>
      <button onClick={hideContents}>Hide details</button>
    </div>
  )
}

export default DispPara
