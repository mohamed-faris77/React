import React, { useState } from 'react'

const CarListObj = () => {

  const[cars, setCars] = useState([])
  const[year, setYear] = useState(new Date().getFullYear())
  const[make, setMake] = useState()
  const[model,setModel] = useState()
  
  const addCar = () => {

  }

  const removeCar = (index) => {

  }

  const updateYear = (e) => {

  }

  const updateMake = (e) => {

  }

  const updateModel = (e) => {

  }

  return (
    <div>
      <h2>Car's List of objects</h2>
      <ul>
        <li></li>
      </ul>

    <input type="number" value={year} onChange={updateYear}/><br/>
    <input type="text" value={make} onChange={updateMake} placeholder='Enter Make'/><br/>
    <input type="text" value={model} onChange={updateModel} placeholder='Enter Model'/><br/>
    <button onClick={addCar}>Add</button>

    </div>
  )
}

export default CarListObj
