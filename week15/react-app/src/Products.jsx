import React, { useState } from 'react';

const cartItems = [
  { id: 1, name: "Laptop", brand: "MSI", quantity: 1, price: 700 },
  { id: 2, name: "Laptop", brand: "Acer", quantity: 1, price: 650 },
  { id: 3, name: "Laptop", brand: "Lenovo", quantity: 1, price: 500 },
];

const Products = () => {
  const [items, setItems] = useState(cartItems);

  const increment = (id) => {
    const updated = items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updated);
  };

  const decrement = (id) => {
    const updated = items.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setItems(updated);
  };

  const list = items.map(item =>
    <h4 key={item.id}>
      <strong>{item.name}</strong> - {item.brand} | Quantity: {item.quantity} | 
      Price: ₹{item.quantity * item.price}
      <br />
      <button onClick={() => increment(item.id)}>+</button>
      <button onClick={() => decrement(item.id)}>-</button>
    </h4>
  );

  return (
    <div>
      <h2>Cart Items</h2>
      <p>{list}</p>
    </div>
  );
};

export default Products;
