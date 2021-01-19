import React from 'react'
import CheckoutItems from './CheckoutItems'


const Checkout = (props) => {
   
    const {cart} = props;
    const emptyCart = <h1 className='empty-cart'>The cart is empty</h1> ;    
    const items = <CheckoutItems 
                            cart={cart}
                            deleteItem={props.deleteItem}
                            totalPrice={props.totalPrice}
                    />

    return (
        <div>{ cart.length === 0 ? emptyCart : items } </div>      
        
    )
}

export default Checkout;