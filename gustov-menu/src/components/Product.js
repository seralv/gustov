import React from 'react';
import pique from '../assets/images/pique.jpg'

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="product">
      <img className="small" src={pique} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="price">${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Agregar</button>
      </div>
    </div>
  );
}
