import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  const [products, setProducts] = useState([]);

  const handleAdd = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <h1>Simple eCommerce</h1>
      <AddProduct onAdd={handleAdd} />
      <ProductList />
    </div>
  );
}

export default App;
