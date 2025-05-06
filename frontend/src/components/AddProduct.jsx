import React, { useState } from 'react';

function AddProduct({ onAdd }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price: parseFloat(price), image };

    fetch('http://localhost:5200/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      onAdd(data);
      setName('');
      setPrice('');
      setImage('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" type="number" />
      <input value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
