import { useCartContext } from "../contexts/CartContext";

export const ItemCart = ({item}) =>{
    const {removeItem} = useCartContext();
    return (
        <div className="cartRowContainer">
            <div className="CartColumn"><img className="cartItemImg" src={item.image} alt="itemImage"/></div>
            <div className="CartColumn"><p>{item.name}</p></div>
            <div className="CartColumn"><p>{item.description}</p></div>
            <div className="CartColumn"><p>{item.quantity} x <span>${item.price * item.quantity}</span></p></div>
            <div className="CartColumn"><button type="button" className="btn" onClick={() => removeItem(item.id, item.quantity)}>X</button></div>
        </div>
    );
}