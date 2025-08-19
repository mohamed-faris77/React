import React, { useState } from 'react'

const SimpleUseState = () => {

const [name, setName] = useState("Guest");
const [age, setAge] = useState(0);
const [employment, setEmployment] = useState(false);

const showName =() =>{
  setName("Faris")
}

const showAge =() => {
  setAge( age + 1)
}

const showEmployment = () => {
  setEmployment(!employment)
}

  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={showName}>Show Name</button>
       <p>Age : {age}</p>
      <button onClick={showAge}>Increment Age</button>
       <p>Eployed : {employment ? "Yes" : "No"}</p>
      <button onClick={showEmployment}>Toggle Employement</button>
    </div>
  )
}

export default SimpleUseState
