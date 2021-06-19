import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import Filter  from './Filter';
import { useStateValue } from './StateProvider';

function App() {

  const [{ basket },] = useStateValue();
  // const [product, setProduct] = useState("");
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  const filterProducts = (event) => {
    setSize(event.target.value)
    // setProduct(basket.length)
    // product: basket.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
  }

  const sortProducts = (event) => {
    setSort(event.target.value)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header/>
            <Filter 
            count={basket.length}
            sort={sort} 
            size={size} 
            filterProducts={filterProducts} 
            sortProducts={sortProducts}/>
            <Home/>
            </Route>
            <Route path="/orders">
              <Header/>
            <Orders/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
