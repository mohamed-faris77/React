import React, { useState } from 'react'

const App = () => {
 
function changeData() {
  setName("Nishitha");
  setAge(21)
  setPlace("Rajampet AP")
}


  const[name, setName]= useState("Faris")
  const[age, setAge]= useState(21)
  const[place, setPlace]= useState("Gudalur")


  return (
    <div>
       {name}
       <br/>
       {age}
       <br/>
       {place}
       <br/>
       <button onClick={changeData}>Change Data</button>
       <button onClick={()=>{setName("Hisham")}}>  Click</button>
    </div>
  )
}

export default App
