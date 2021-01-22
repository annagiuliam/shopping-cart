import React from 'react';
import {useContext} from 'react';
import {ShopContext} from '../context/ShopContext';

const CakeCard = (props) => {
    const {cake} = props
    const {handleSubmit}  = useContext(ShopContext);

    // function handleSubmit(e, cake) {
    //     e.preventDefault();
    //     const qty = parseInt(e.target.firstChild.value);
    //     setCount(qty);
    //     addToCart(cake, qty);       
    // }

    return(
        <div className='cake-wrapper'>
            <img src={cake.src} alt='""'></img>
            <div className='cake-name'>{cake.name}</div>
            <div className='price-wrapper'>
                <div className='cake-price'>{Number(cake.price).toFixed(2)} $</div>  
                    <form onSubmit={(e) => handleSubmit(e, cake)}>  
                    <input type='number' id='quantity-input' name='quantity' min='1' defaultValue='1'></input>
                        <button type='submit' >Add to cart</button>           
                    </form> 
            </div>            
        </div>
    )
}

export default CakeCard;