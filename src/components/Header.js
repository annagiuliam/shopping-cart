import React from 'react';
import {Link} from 'react-router-dom';

import Cart from './Cart'

function Header(props) {
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
            {(props.match.path === '/' && props.match.isExact === false) && <Cart />}
            </nav>
        </header>
        
    )
}

export default Header;