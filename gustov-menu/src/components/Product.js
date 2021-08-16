import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="product">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="price">Bs.{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Agregar</button>
      </div>
    </div>
  );
}
