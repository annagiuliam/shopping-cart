import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CheckoutItems = (props) => {
    const {cart} = props
 return (
    <div className='checkout-container'>
        <div className='item-container table-header'>
            <div>Item</div>
            <div>Description</div>
            <div>Item Price</div>   
            <div>Quantity</div>  
            <div>Item Total</div>
        </div>

        {cart.map(item => {
            return (
                <div className='item-container' key={item.id}>
                    <div className='img-container'>
                        <img className='checkout-img' src={item.src} alt=''></img>
                    </div> 
                    <div className='item-description'>{item.name}</div> 
                    <div className='item-price'>{Number(item.price).toFixed(2)} $</div>   
                    <div className='item-qty'>{item.count}</div>  
                    <div className='item-total'>{Number(item.price * item.count).toFixed(2)} $</div>
                    <button className='delete-btn' onClick={() => props.deleteItem(item)}>
                        <FontAwesomeIcon icon={faTrash} className='trash-icon'/>
                    </button>
                </div>
            )
        })}
        <div className='order-total'>Order Total: {Number(props.totalPrice).toFixed(2)} $</div>
    </div>
    )
}

export default CheckoutItems