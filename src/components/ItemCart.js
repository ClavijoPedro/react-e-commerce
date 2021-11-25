import { useCartContext } from "../contexts/CartContext";

export const ItemCart = ({item}) =>{
    const {removeItem} = useCartContext();
    return (
        <div className="cartRowContainer">
            <table>
                <tr className="cartRowInfo">
                    <td><img className="cartItemImg" src={item.image} alt="itemImage"/></td>
                    <td><p>{item.name}</p></td>
                    <td><p>{item.description}</p></td>
                    <td><p>{item.quantity} x <span>${item.price * item.quantity}</span></p></td>
                    <td><button type="button" className="btn" onClick={() => removeItem(item.id, item.quantity)}>X</button></td>
                </tr>
            </table>
        </div>
    );
}