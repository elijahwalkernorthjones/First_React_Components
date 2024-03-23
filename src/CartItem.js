import React from 'react';
import './CartItem.css'

const CartItem = ({item, img, price, quantity}) => {
    return (
        <div className='CartItem'>
            <h4 className='CartItem-header'>{item}</h4>
            <img className="CartItem-img" src={img}/>
            <ul>
                <li>Price: ${price}</li>
                <li>Quantity: {quantity}</li>
                <li>Subtotal: ${price * quantity}</li>
            </ul>
        </div>
    );
}


export default CartItem;