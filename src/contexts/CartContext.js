import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"

/*creo el context*/
const CartContext = createContext();


/*exporto el context como custom hook */
export const useCartContext = () => useContext(CartContext);

/* hago el return del provider */
export const CartProvider = ({children}) => {

    /* seteo el estado inicial del cart en array vacio*/   
    const [cart, setCart] = useState([])

    /*isInCart aplico some que si encuentra un item igual en el cart devuelve true*/
    const isInCart = (prod) => cart.some(product => product.id === prod.id);

    /*metodo para agregar la propiedad quantity al item y agregarlo al cart si que se repita*/ 
    const addItem = (prod, qty) => {
        // const isInCart = cart.some(product => product.id === prod.id);
        /*si isInCart es distinto de true agrego la propiedad al item y seteo el estado*/
        if(!isInCart(prod)){
            const product = {...prod, quantity: qty}
            setCart([...cart, product]);
        }
    }
    
    /*metodo remover por item: filtro el cart, me quedo con todos los items que son distintos
     y seteo el estado del cart con la nueva lista sin ese item*/
    const removeItem = (itemId) =>{
        const newList = cart.filter(item => item.id !== itemId);
        setCart(newList);
    }

    /*metodo vaciar cart: seteo el estado del cart a array cacio*/
    const cartEmpty = () => setCart([]);

    return (
        <CartContext.Provider value={{cart, addItem, isInCart, removeItem, cartEmpty}}>
            {children}
        </CartContext.Provider>
    );
}

