import React, { useEffect, useState } from 'react'; 
import './Shop.css'
import Product from '../products/Product';
import Cart from '../Cart/Cart';
import { addTodb, getShoppingCart } from '../utilities/Fakedb';

const Shop = () => {  
    const [cart,setCart] = useState([]); 
   
    const [products, setProducts] = useState([]);  
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json()) 
        .then(data => setProducts(data));  
    },[]); 

    

    useEffect(() => { 
       
        const storedCart = getShoppingCart();  
        const savedCart = []; 
        for(const id in storedCart) {
            const addedProduct = products.find(product => product.id === id) ;
           
            if(addedProduct) {
                const quantity = storedCart[id];  
                addedProduct.quantity = quantity; 
                savedCart.push(addedProduct); 
            } 
            console.log(addedProduct); 
        } 
        setCart(savedCart); 

    },[products])
    
    
    const handleAddToCart = (product) => {
        let newCart = []; 
        const exists = cart.find(pd => pd.id === product.id) 
        if(!exists) {
            product.quantity = 1; 
            newCart = [...cart, product]; 
        } else {
            exists.quantity = exists.quantity + 1;  
            const remaining = cart.filter(pd => pd.id !== product.id); 
            newCart = [...remaining,exists]; 
        }
        setCart(newCart); 
        
        addTodb(product.id); 
    } 

    
   
    return ( 
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key = {product.id} product = {product} handleAddToCart = {handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;