import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
    
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
            <div>Cart</div>
        </nav>
        </header>
        
    )
}

export default Header;