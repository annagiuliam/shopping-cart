import React from 'react';
import {useContext} from 'react';
import {Link} from 'react-router-dom';

import {ShopContext} from '../context/ShopContext';
import Cart from './Cart'

function Header() {
const {showCart} = useContext(ShopContext);
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
            {showCart && <Cart />}
            </nav>
        </header>
        
    )
}

export default Header;