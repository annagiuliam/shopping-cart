import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    return(
        <div id="cart-div">
                <div className="icon-div">
                    <FontAwesomeIcon icon={faShoppingCart} size= "2x" id="cart-icon"/>
                    <span class='badge' id='cart-count'>{props.cartQty}</span>
                </div>
               {/*  <div className="cart-info">
                    ({props.cartQty})
                </div> */}
                <div className="cart-info">
                {Number(props.totalPrice).toFixed(2)} $
                </div>
            </div>
    )
}

export default Cart;