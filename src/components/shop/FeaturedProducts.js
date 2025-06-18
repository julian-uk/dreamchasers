import React from 'react';
import { products } from '../../data/products';

function FeaturedProducts() {
  return (
    <div className="grid">
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>${product.price}</p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProducts;
