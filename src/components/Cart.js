import React from 'react';
import {useContext} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

import { ShopContext } from '../context/ShopContext';

const Cart = () => {
const {cartQty, totalPrice} = useContext(ShopContext);
    return(
        <div id='cart-div'>
            <div className='icon-div'>
                <Link to='/checkout'>
                    <FontAwesomeIcon icon={faShoppingCart} size= '2x' id='cart-icon'/>
                </Link>                    
                <span className='badge' id='cart-count'>{cartQty}</span>
            </div>
            <div className='cart-info'>
                {Number(totalPrice).toFixed(2)} $
            </div>
        </div>
    )
}

export default Cart;