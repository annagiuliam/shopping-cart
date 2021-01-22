import React from 'react';
import {useContext} from 'react';
import { ShopContext } from '../context/ShopContext';
import CheckoutOverview from './CheckoutOverview'


const Checkout = (props) => {
   const {cart} = useContext(ShopContext)
    
    const emptyCart = <h1 className='empty-cart'>The cart is empty</h1> ;    
    const items = <CheckoutOverview />

    return (
        <div>{ cart.length === 0 ? emptyCart : items } </div>      
        
    )
}

export default Checkout;