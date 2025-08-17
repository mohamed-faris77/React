import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Prodct = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((e) => {
        setProduct(e.data)
      })

  }, [])

  return (
    <div>
      <h2>Fetching data</h2>
      {product.map(p => <div>
        <h3>{p.id}</h3>
        <h4>{p.title}</h4>
        <h6>{p.description}</h6>
        <h5>{p.price}</h5>
        <h5> Rate : {p.rating.rate}</h5>
        <img src={p.image} alt="Pic" />
      </div>)}
    </div>
  )
}


export default Prodct
