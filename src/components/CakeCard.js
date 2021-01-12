import React from 'react';

const CakeCard = (props) => {


    return(
        <div className='cake-wrapper'>
            <img src={props.src} alt=""></img>
            <div className='cake-name'>{props.name}</div>
            <div className='price-wrapper'>
            <div className='cake-price'>{Number(props.price).toFixed(2)} $</div>
                <button>Add to cart</button>
                <input type='number' id='quantity-input' name='quantity' min="1" defaultValue="1"></input>
            </div>
            
        </div>
    )
}

export default CakeCard;