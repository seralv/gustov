import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import productsService from './services/products'
// import data from './data';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Reports from './components/Reports';

function App() {
  //const { products } = data;
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const getProducts = () => {
    productsService
      .getAll()
      .then( initialPersons => {
        setProducts( initialPersons )
      } )
  }

  useEffect(() => {
    getProducts()
  }, [])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <Router>
      <div className="App">
        <Header countCartItems={cartItems.length} cartItems={cartItems}></Header>
        <Switch>
          <Route path="/" exact>
            <Home products={products} onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}/>
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
