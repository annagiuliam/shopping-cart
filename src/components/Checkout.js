import React from 'react'

const Checkout = (props) => {
   
    const {cart} = props
    
    return (

        <div className="checkout-container">
            <div className="item-container">
            <div className="img-container">Item</div>
            <div className="item-description">Description</div>
            <div className="item-price">Item Price</div>   
            <div className="item-qty">Quantity</div>  
            <div className="item-total">Item Total</div>
        </div>

        {cart.map(item => {
            return (
                <div className="item-container">
                    <div className="img-container">
                        <img className="checkout-img" src={item.src} alt=""></img>
                    </div> 
                    <div className="item-description">{item.name}</div> 
                    <div className="item-price">{item.price}</div>   
                    <div className="item-qty">{item.count}</div>  
                    <div className="item-total">{item.price * item.count}</div>
                </div>
            )
        })
        }
        </div>
    )
}

export default Checkout;