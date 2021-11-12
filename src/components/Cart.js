import { useCartContext } from "../contexts/CartContext";
import { Button } from "./Button";
import { ItemCart } from "./ItemCart";

export const Cart = () => {
    const {cart, cartEmpty} = useCartContext()
    console.log("esto es cart de la pagina cart" + cart);
    return(
        <>
            <div className="cartContainer">
            <h2>Tu carrito</h2>
                <div>
                    {cart.length ? cart.map(prod => 
                        <ItemCart item={prod} key={prod.id}/> 
                    ) : "Carrito vacio"}             

                </div>
                <div>
                    {cart.length ? <button className="btn" onClick={() => cartEmpty()}>vaciar carrito</button> 
                    : <Button link="/" action="volver"/>}    
                </div>
            </div>
        </>
    );
}