import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal]= useState(null)
    const [idUpdate, setIdUpdate] = useState([]);

    const isInCart = (prod) => cart.some(product => product.id === prod.id);

    const addItem = (prod, qty) => {
        if(!isInCart(prod)){
            const product = {...prod, quantity: qty, stock: prod.stock - qty};
            setCart([...cart, product]);
            setCartTotal(cartTotal + prod.price * qty);
            setIdUpdate([...idUpdate, prod.id]);
        }
    }
    
    const removeItem = (itemId, itemQty) =>{
        const newList = cart.filter(item => item.id !== itemId);
        const item = cart.find(prod=> prod.id === itemId);
        setCart(newList);
        setCartTotal(cartTotal - item.price * itemQty);
    }

    const cartEmpty = () => {
        setCart([]);
        setCartTotal(null);
        setIdUpdate([]);
    };

    return (
        <CartContext.Provider value={{cart, cartTotal, idUpdate, addItem, isInCart, removeItem, cartEmpty}}>
            {children}
        </CartContext.Provider>
    );
}

