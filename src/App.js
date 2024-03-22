import React from 'react';
import items from './items';
import ShoppingCart from './ShoppingCart';
// import cats, {meow} from './cats'
// import {add, multiply} from './helpers'
import './App.css';

function App() {
  return (
    <ShoppingCart items={items}/>
  )
}

export default App;
