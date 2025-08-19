import React, { useState } from 'react'

const ObjectUse = () => {
  const [car, setCar] = useState({ year: 2024, make : 'Ford' , model : 'Mustang'})

const updateCarYear= (e) => {
  setCar(c=> ({...c, year: e.target.value}))
}

const updateCarMake= (e) => {
  setCar(c=> ({...c, make: e.target.value}))
}

const updateCarModel= (e) => {
  setCar(c=> ({...c, model: e.target.value}))
}


  return (
    <div>
      <p><h2>Car : </h2>{car.make} {car.model} {car.year}</p>
      <input type="number" value={car.year} onChange={updateCarYear}/>
      <input type="text" value={car.make} onChange={updateCarMake}/>
      <input type="text" value={car.model} onChange={updateCarModel}/>

    </div>
  )
}

export default ObjectUse
