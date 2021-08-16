import React from 'react';
import CartIcon from './CartIcon'

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Gustov</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          <CartIcon />{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
  );
}