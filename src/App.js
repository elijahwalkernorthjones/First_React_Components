import React from 'react';
import logo from './logo.svg'
import Alert from './Alert';
import items from './items';
import moreItems from './moreItems';
import ShoppingCart from './ShoppingCart';
import './App.css';

function App() {
  return (
    <div>
      <Alert variant="success">
        <h1>Welcome Back!</h1>
      </Alert>
      <Alert variant="danger">
        <h1>OH NO!</h1>
      </Alert>
      
      <img src={logo} id="logo"/>
      <ShoppingCart items={items} username="Carly"/>
      <ShoppingCart items={moreItems} username="Rusty"/>
    </div>
  )
}

export default App;
