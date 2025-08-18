import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {

  // State to store all products
  const [products, setProducts] = useState([]);
  // State for adding a new product
  const [newProduct, setNewProduct] = useState({ title: '', price: '' });
  // State for editing an existing product
  const [editProduct, setEditProduct] = useState(null);

  // GET: Fetch all products when component loads
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data); // Store API data
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // POST: Add a new product
  const handleAddProduct = (e) => {
    e.preventDefault();
    axios.post('https://fakestoreapi.com/products', newProduct)
      .then((response) => {
        setProducts(prev => [...prev, response.data]); // Add to list
        setNewProduct({ title: '', price: '' }); // Reset form
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  // PUT: Update an existing product
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    axios.put(`https://fakestoreapi.com/products/${editProduct.id}`, editProduct)
      .then((response) => {
        setProducts(products.map(p => p.id === editProduct.id ? response.data : p));
        setEditProduct(null); // Close edit form
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };
  // When clicking "Edit", fill form with product data
  const handleEditClick = (product) => {
    setEditProduct(product);
  };

  return (
    <div>
      <h2>Product List</h2>
      {/* Add Product Form */}
      <form onSubmit={handleAddProduct} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Title"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Edit Product Form (only shows when editing) */}
      {editProduct && (
        <form onSubmit={handleUpdateProduct} style={{ marginBottom: '20px' }}>
          <h3>Edit Product</h3>
          <input
            type="text"
            value={editProduct.title}
            onChange={(e) => setEditProduct({ ...editProduct, title: e.target.value })}
            required
          />
          <input
            type="number"
            value={editProduct.price}
            onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
            required
          />
          <button type="submit">Update Product</button>
          <button type="button" onClick={() => setEditProduct(null)}>Cancel</button>
        </form>
      )}

      {/* Display Products */}
      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h4>{p.title}</h4>
          <p>Price: ${p.price}</p>
          <button onClick={() => handleEditClick(p)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;