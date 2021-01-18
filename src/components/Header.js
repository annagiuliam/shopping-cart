import React from 'react';
import {Link} from 'react-router-dom';

import Cart from './Cart'



function Header(props) {
   console.log(props) 
    return (
        <header>
            <nav >
                <ul className="nav-links">
                    <Link to='/' className='white-link'>
                        <li>Home</li>
                    </Link>
                    <Link to='/shop' className='white-link'>
                        <li>Shop</li>
                    </Link>
                </ul>
            {props.showCart && <Cart 
                                cartQty={props.cartQty}
                                totalPrice={props.totalPrice}
                                displayCheckout={props.displayCheckout}
            
            />}
        </nav>
        </header>
        
    )
}

export default Header;