import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5200/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            <img src={p.image} alt={p.name} width="100" />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
