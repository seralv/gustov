import React from 'react'
import Main from './Main'
import Basket from './Basket'

const Home = ({products, onAdd, cartItems, onRemove, clearCartItems}) => {
    return (
        <div className="row">
          <Main products={products} onAdd={onAdd}></Main>
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
        </div>
    )
}

export default Home