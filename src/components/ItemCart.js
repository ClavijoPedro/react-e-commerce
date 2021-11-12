import { useCartContext } from "../contexts/CartContext";

export const ItemCart = ({item}) =>{
    const {removeItem} = useCartContext();
    return (
        <div className="cartRow">
            <img className="cartItemImg" src={item.image} alt="itemImage"/>
            <div className="cartRowInfo">
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <p>{item.quantity}</p>
                <button type="button" className="btn" onClick={() => removeItem(item.id)}>X</button>
            </div>
        </div>
    );
}