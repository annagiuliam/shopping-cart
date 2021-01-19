import React from 'react';
import {useState, useEffect} from 'react';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import cakesArr from '../src/cakes';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';

import { sumCartQty, sumTotalPrice} from './assets/helper'


const App = () => {
    const [cakes] = useState(cakesArr);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(1);
    const [cartQty, setCartQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showCart, setShowCart] = useState(false);
    
    useEffect(()=> {    
        sumCartQty(cart, setCartQty);
        sumTotalPrice(cart, setTotalPrice);
    }, [cakes, cart, count, cartQty]);

    function displayCart() {
        setShowCart(true)
    }
    
    function addToCart(cake, qty) {
       const cartItem = cart.find(item => item.id === cake.id);
       cartItem ? changecartQty(cartItem, qty) : addNewCake(cake, qty);         
    }

    function addNewCake(cake, qty) {
        const newCake = {...cake};
        newCake.count += qty;
        const newCart = [...cart, newCake];
        setCart(newCart)        
    }

    function changecartQty(item, qty) {
      const newCart = cart.map(ele => {
          if (ele.id === item.id) {
             ele.count += qty;
            }
          return ele; 
      })
      setCart(newCart);
    }

    function checkPath(match) {
        match.path !== '/' ? setShowCart(true) : setShowCart(false);
    }
   
    function handleSubmit(e, cake) {
        e.preventDefault();
       const qty = parseInt(e.target.firstChild.value);
       setCount(qty);
       addToCart(cake, qty);
    }

    function deleteItem(item) {
        const newCart = cart.filter(cake => cake.id !== item.id);
        setCart(newCart);
    }
    

    return (
        
        <BrowserRouter>
            <Header 
            cartQty={cartQty}
            totalPrice={totalPrice}
            showCart={showCart}
            />
                    
            <Switch >
                <Route exact path='/' render={(props) => (
                    <Home {...props}
                        displayCart={displayCart}
                        checkPath={checkPath}
                        />
                )} />
                <Route path='/shop' 
                        render={(props) => (
                            <Shop {...props} 
                            cakes={cakes}
                            onSubmit={handleSubmit}
                            count={count}
                            checkPath={checkPath}
                            />
                        )} 
                        />
                <Route path='/checkout'
                        render={(props) => (
                            <Checkout {...props}
                            cart={cart} 
                            deleteItem={deleteItem}
                            totalPrice={totalPrice}
                            />
                        )}
                    />           
            </Switch>
        </BrowserRouter> 
    )
}

export default App;