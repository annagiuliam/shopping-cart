import React from 'react';

const CakeCard = (props) => {
const {cake} = props

    return(
        <div className='cake-wrapper'>
            <img src={cake.src} alt=""></img>
            <div className='cake-name'>{cake.name}</div>
            <div className='price-wrapper'>
            <div className='cake-price'>{Number(cake.price).toFixed(2)} $</div>  
                <form>             
                    <input type='number' onChange={(e) => props.onChange(e)} id='quantity-input' name='quantity' min="1" defaultValue="1"></input>
                    <button type="submit" onClick={() => props.onClick(cake)}>Add to cart</button>
                </form> 
            </div>
            
        </div>
    )
}

export default CakeCard;