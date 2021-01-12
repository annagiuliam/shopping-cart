import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <div className="home-container">
            <h1>The little cake shop</h1>
            <h2>Design cakes for any occasion</h2>
            <Link to='/shop'>
                <button>Go to the shop</button>
            </Link>
            
        </div>
    )
}

export default Home;