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
    const [count, setCount] = useState(0);
    useEffect(()=> {
        console.log(cart)
        console.log(count)
    }, [cakes, cart, count]);
    
    function addToCart(cake) {
        const newCake = {...cake};
        newCake.count += 1;
        const newCart = [...cart, newCake];
        setCart(newCart)
    }

    function handleChange(e) {
        setCount(e.target.value)// riparti da handleChange, aggiungi handleSubmit
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
                            onClick={addToCart}
                            count={count} 
                            onChange={handleChange}/>
                        )} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;