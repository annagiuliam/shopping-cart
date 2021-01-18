import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom';

const Cart = (props) => {

    return(
        <div id="cart-div">
                <div className="icon-div">
                    <Link to='/checkout' onClick={props.displayCheckout}>
                        <FontAwesomeIcon icon={faShoppingCart} size= "2x" id="cart-icon"/>
                    </Link>
                    
                    <span class='badge' id='cart-count'>{props.cartQty}</span>
                </div>
                <div className="cart-info">
                {Number(props.totalPrice).toFixed(2)} $
                </div>
            </div>
    )
}

export default Cart;