import { useCartContext } from "../contexts/CartContext";
import { Button } from "./Button";
import { CartOrder } from "./CartOrder";
import { ItemCart } from "./ItemCart";

export const Cart = () => {
    const {cart, cartTotal, cartEmpty} = useCartContext();
    
    return(
        <div className="cartContainer">
            <h2>Tu carrito</h2>
            {cart.length ? 
            <div className="cartTotal">
                <h3>Detalle de compra</h3>
                <p className="CartTotalPrice">Total: ${cartTotal} </p>
                <CartOrder />
            </div> : ""}
            <div>
                {cart.length ? cart.map(prod => 
                    <ItemCart item={prod} key={prod.id}/> 
                ) : <p className="bold">está vacio...</p>}            
            </div>
            <div>
                {cart.length ? <button className="btn" onClick={() => cartEmpty()}>vaciar carrito</button> 
                : <Button link="/" action="volver"/>}    
            </div>
        </div>
    );
}