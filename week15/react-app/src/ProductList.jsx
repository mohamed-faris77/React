import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((e) => {
        setProduct(e.data);
      })
      .catch((error) => {
        console.error("Error Fetching Data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {product.map (p => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <img src={p.image} alt="" />
          <h5>${p.price}</h5>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
