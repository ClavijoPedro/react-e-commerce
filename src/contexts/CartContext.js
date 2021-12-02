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
    
    /*seteo el estado del total de carrito y cuando hago onAdd le suma los precios de los items agrgados*/
    const [cartTotal, setCartTotal]= useState(null)

    /*seteo el estado que acumula ids*/
    const [idUpdate, setIdUpdate] = useState([]);

    /*isInCart aplico some que si encuentra un item igual en el cart devuelve true*/
    const isInCart = (prod) => cart.some(product => product.id === prod.id);

    /*metodo para agregar la propiedad quantity al item y agregarlo al cart sin que se repita*/ 
    const addItem = (prod, qty) => {
        // const isInCart = cart.some(product => product.id === prod.id);
        /*si isInCart es distinto de true agrego la propiedad al item y seteo el estado agregando el producto al array  y seteo el carTotal*/
        if(!isInCart(prod)){
            const product = {...prod, quantity: qty};
            setCart([...cart, product]);
            setCartTotal(cartTotal + prod.price * qty);
            setIdUpdate([...idUpdate, prod.id]);
        }
    }
    
    /*metodo remover por item: filtro el cart, me quedo con todos los items que son distintos
     y seteo el estado del cart con la nueva lista sin ese item - seteo el cartTotal menos el precio del item removido*/
    const removeItem = (itemId, itemQty) =>{
        const newList = cart.filter(item => item.id !== itemId);
        const item = cart.find(prod=> prod.id === itemId);
        setCart(newList);
        setCartTotal(cartTotal - item.price * itemQty);
    }

    /*metodo vaciar cart: seteo el estado del cart a array vacio y el estdo del cartTotal a null*/
    const cartEmpty = () => {
        setCart([]);
        setCartTotal(null)
    };

    return (
        <CartContext.Provider value={{cart, cartTotal, idUpdate, addItem, isInCart, removeItem, cartEmpty}}>
            {children}
        </CartContext.Provider>
    );
}

