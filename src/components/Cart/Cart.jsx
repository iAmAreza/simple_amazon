import React from 'react';
import './Cart.css'
const Cart = ({cart}) => { 
    let totalPrice = 0; 
    let totalShipping = 0;  
    let quantity = 0; 
    for(const product of cart) {
        totalPrice += product.price * product.quantity; 
        totalShipping += product.shipping;  
        quantity += product.quantity; 
    } 
    const tax = totalPrice * 0.1
    return (
        <div className='cart'>
              <h3>Order summary</h3> 
              <h4>Selected Items : {cart.length}</h4> 
              <h4>TotalPrice : ${totalPrice}</h4> 
              <h4>TotalShipping : ${totalShipping}</h4> 
              <h4>Tax : ${tax.toFixed(2)}</h4> 
              <h4>GrandTotal : ${totalPrice + totalShipping + tax}</h4>
        </div>
    );
};

export default Cart;  