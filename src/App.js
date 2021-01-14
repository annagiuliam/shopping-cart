import React from 'react';
import {useState, useEffect} from 'react';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import cakesArr from '../src/cakes'
import Header from './components/Header';
import Home from './components/Home'
import Shop from './components/Shop'


const App = () => {
    const [cakes, setCakes] = useState(cakesArr);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(1);
    const [quantity, setQuantity] = useState(0);

    useEffect(()=> {
        console.log(cart)
        console.log(count)
        console.log(quantity)
    }, [cakes, cart, count, quantity]);
    
    function addToCart(cake) {
       const cartItem = cart.find(item => item.id === cake.id)
       cartItem ? changeQuantity(cartItem) : addNewCake(cake)  
        
    }

    function addNewCake(cake) {
        console.log(cake)
        const newCake = {...cake};
        newCake.count += count;
        console.log(newCake);
        const newCart = [...cart, newCake];
        setCart(newCart)
    }

    function changeQuantity(item) {
      const newCart = cart.map(ele => {
          if (ele.id === item.id) {
             ele.count += count;
          }
          return ele; 
      })
      setCart(newCart);
    }

    function handleChange(e) {
       const qty = parseInt(e.target.value)
       setCount(qty);
    }

    function handleSubmit(e, cake) {
        e.preventDefault();
        addToCart(cake);
        
    }
    
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/shop' 
                        render={(props) => (
                            <Shop {...props} 
                            cakes={cakes}
                            //onClick={addToCart}
                            onChange={handleChange}
                            onSubmit={handleSubmit}/>
                        )} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;