const addTodb = (id) => {
    let shoppingCart = {}; 
    const storedCart = localStorage.getItem('shopping-cart'); 
    if(storedCart) {
        shoppingCart = JSON.parse(storedCart);  
    } 
    let quantity = shoppingCart[id];  
    if(quantity) {
        let newQuantity = quantity + 1; 
        shoppingCart[id] = newQuantity;  
    } 
    else {
        shoppingCart[id] = 1; 
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart)); 
} 
const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart'); 
    if(storedCart) {
        const shoppingCart = JSON.parse(storedCart); 
        if(id in shoppingCart) {
            delete shoppingCart[id]; 
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
} 

const deleteShoppingCart = () => { 
    localStorage.removeItem('shopping-cart'); 
} 

export {
    addTodb, 
    removeFromDb, 
    deleteShoppingCart
}