import React from 'react';
import {Link} from 'react-router-dom';

import {useContext} from 'react';
import { ShopContext } from '../context/ShopContext';


const Home = (props) => {
    const {checkPath, displayCart} = useContext(ShopContext);
    checkPath(props.match);
    
    return (
        <div className='home-container' >
            <div className='home-text'>
                <h1>The little cake shop</h1>
                <h2>Design cakes for any occasion</h2>
                <Link to='/shop'>
                    <button onClick={displayCart}>Go to the shop</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;