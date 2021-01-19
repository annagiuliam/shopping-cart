import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
   props.checkPath(props.match)
    return (
        <div className='home-container' >
            <div className='home-text'>
                <h1>The little cake shop</h1>
                <h2>Design cakes for any occasion</h2>
                <Link to='/shop'>
                    <button onClick={props.displayCart}>Go to the shop</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;