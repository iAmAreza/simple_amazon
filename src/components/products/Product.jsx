import React from 'react';
import './Product.css' 
import { FaCartPlus } from "react-icons/fa";
const Product = (props) => {  
    const {product} = props;
    const {name,img,seller,price,ratings} = product; 
    const {handleAddToCart} = props;  
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" /> 
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <h4>Price: ${price}</h4> 
                <h4>seller: {seller}</h4> 
                <h4>Ratings : {ratings}</h4>
            </div>
           <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>
             <p>Add to cart</p> 
             <FaCartPlus className='cart-icon'></FaCartPlus>
           </button>
        </div>
    );
};

export default Product;