import React from 'react' ;
import {useContext} from 'react';
import { ShopContext } from '../context/ShopContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TableRow = (props) => {

    const {item} = props;
    const {deleteItem} = useContext(ShopContext);
    return (
        <div className='item-container' key={item.id}>
            <div className='img-container'>
                <img className='checkout-img' src={item.src} alt=''></img>
            </div> 
            <div className='item-description'>{item.name}</div> 
            <div className='item-price'>{Number(item.price).toFixed(2)} $</div>   
            <div className='item-qty'>{item.count}</div>  
            <div className='item-total'>{Number(item.price * item.count).toFixed(2)} $</div>
            <button className='delete-btn' onClick={() => deleteItem(item)}>
                <FontAwesomeIcon icon={faTrash} className='trash-icon'/>
            </button>
        </div>
    )
}

export default TableRow;