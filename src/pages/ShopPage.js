import React from 'react';
import { products } from '../data/products';

function ShopPage() {
  return (
    <div>
      <h1>Shop</h1>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name} - ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ShopPage;
