import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

export default function Header({countCartItems, cartItems}) {
  
  return (
    <header className="block row center">
      <div className="title">
        <Link to="/">
          <h1>Restaurante Gustov</h1>
        </Link>
      </div>
      <div className="links">
        <Link to="/"><h2>Menú</h2></Link>
        <Link to="/reports"><h2>Reports</h2></Link>
      </div>
      <div>
        <a href="#/cart">
          <CartIcon />{' '}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        {/* <a href="#/signin"> SignIn</a> */}
      </div>
    </header>
  );
}

