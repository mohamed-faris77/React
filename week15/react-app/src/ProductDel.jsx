import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductDel = () => {
  const[product,setProduct] = useState([])

  useEffect( () => {
    axios.get("https://fakestoreapi.com/products")
    .then((e) => setProduct(e.data))
  }, [])

  const deleteProduct = (id) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {

        const updatedList = product.filter(p => p.id !== id)
        setProduct(updatedList)
      })
      
  }


  return (
    <div>
      <h2>Product List</h2>

      {product.map((p) => {
        return (
          <div key={p.id}>
            <h4>{p.title}</h4>
            <img src={p.image} alt="product" width="100" />
            <h5>${p.price}</h5>
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default ProductDel

