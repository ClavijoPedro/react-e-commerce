import { addDoc, collection, doc, getFirestore, writeBatch } from "@firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

export const CartOrder = () =>{
    const [orderSended, setOrderSended] = useState(false);
    const [orderId, setOrderId] = useState("");
    const db = getFirestore();

    const {cartTotal, cart, cartEmpty, idUpdate} = useCartContext();

    const [buyerData, setBuyerData] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const setData = (e) => {
        setBuyerData({
            ...buyerData,
            [e.target.name] : e.target.value
        });
    }

    const date = new Date();
	const orderDate = date.toLocaleDateString();

    const sendOrder = (e) => {
        e.preventDefault();
        const itemOrder = {
            date: orderDate,
            buyer: buyerData,
            items: [...cart],
            total: cartTotal
        };
        const orderList = collection(db, "orders");
        addDoc(orderList, itemOrder)
        .then((snapshot) => { 
                setOrderId(snapshot.id);
            }
        );
        setOrderSended(true);
    }
    
    const finishOrder = () => {
        const batch = writeBatch(db);
        idUpdate.forEach((id) => {
            const itemRef = doc(db, "items", id);
            const itemCart = cart.find(prod => prod.id === id);
            batch.update(itemRef, {stock: itemCart.stock});
        });
        batch.commit();
        cartEmpty();
    }
    
    const idClass= orderId ? 'cartOrderCode' : "" ;

    const input = [
        {
            value:buyerData.name,
            type: "text", pholder: "ingrese su nombre",
            name: "name",
            pattern: "[A-Za-z]{4,}"
        },
        {
            value:buyerData.phone,
            type: "tel", pholder: "ingrese su telefono",
            name: "phone",
            pattern:"[0-9]{10,}"
        },
        {
            value:buyerData.email,
            type: "email", pholder: "ingrese su email",
            name: "email",
            pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
        },
    ]

    return (
        <>
            {!orderSended &&
            <form className="cartOrderContainer" onSubmit={sendOrder}>
                {input.map(att => 
                    <input 
                    value={att.value}
                    key={att.name}
                    type={att.type}
                    onChange={setData}
                    placeholder={att.pholder} name={att.name}
                    pattern={att.pattern}
                    required
                />)}
                <button type="submit" className="btn" >enviar orden</button>
            </form>
            }
            {orderSended &&
                <div className="cartOrderSended">
                    <p>El código de su pedido es:</p>
                    <span className={idClass}>{orderId}</span>
                    <Link to="/">
                        <button type="button"  onClick={finishOrder} className="btn">finalizar</button>
                    </Link>
                </div>
            }
        </>
    )
}