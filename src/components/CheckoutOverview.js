import React from 'react'
import {useContext} from 'react';
import { ShopContext } from '../context/ShopContext';

import TableHeader from './CheckoutTableHeader';
import TableRow from './CheckoutTableRow';



const CheckoutOverview = (props) => {
    const {cart, totalPrice} = useContext(ShopContext);
    
 return (
    <div className='checkout-container'>
        <TableHeader />
        {cart.map(item => {
            return (
                <TableRow item={item} key={item.id}/>
            )
        })}
        <div className='order-total'>Order Total: {Number(totalPrice).toFixed(2)} $</div>
    </div>
    )
}

export default CheckoutOverview;