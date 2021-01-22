import React  from 'react';
import {useState, createContext, useEffect} from 'react';
import cakesArr from '../cakes'


export const ShopContext = createContext();

export const ContextProvider = ({children}) => {
    const [cakes] = useState(cakesArr);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(1);
    const [cartQty, setCartQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showCart, setShowCart] = useState(false);

    useEffect(()=> {  

        function sumCartQty() {
            const total = cart.reduce((tot, curr) => tot += curr.count, 0);
            setCartQty(total);
        }
        
        function sumTotalPrice() {
            const total = cart.reduce((tot, curr) => tot += (curr.count * curr.price), 0);
            setTotalPrice(total)
        } 
        sumCartQty(cart, setCartQty);
        sumTotalPrice(cart, setTotalPrice);
    }, [cakes, cart, count, cartQty]);

    function addToCart(cake, qty) {
        const cartItem = cart.find(item => item.id === cake.id);
        cartItem ? changecartQty(cartItem, qty) : addNewCake(cake, qty);  
          
    }
    function addNewCake(cake, qty) {
        const newCake = {...cake};
        newCake.count += qty;
        const newCart = [...cart, newCake];
        setCart(newCart);        
    }

    function displayCart() {
        setShowCart(true)
    }
    function handleSubmit(e, cake) {
            e.preventDefault();
            const qty = parseInt(e.target.firstChild.value);
            setCount(qty);
            addToCart(cake, qty);       
        }

    function changecartQty(item, qty) {
        const newCart = cart.map(ele => {
            if (ele.id === item.id) {
               ele.count += qty;
              }
            return ele; 
        })
        setCart(newCart);
      }
  
      function checkPath(match) {
          match.path !== '/' ? setShowCart(true) : setShowCart(false);
      }

      function deleteItem(item) {
        const newCart = cart.filter(cake => cake.id !== item.id);
        setCart(newCart);
    } 
    return(
        <ShopContext.Provider value={{showCart, checkPath, displayCart, cartQty, totalPrice,
        setCount, addToCart, cakes, cart, 
        handleSubmit,
         setTotalPrice,  
         setShowCart,   deleteItem}}>
            {children}
        </ShopContext.Provider>
    )
}