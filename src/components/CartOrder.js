import { addDoc, collection, doc, getFirestore, writeBatch } from "@firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

export const CartOrder = () =>{
    const [orderSended, setOrderSended] = useState(false);
    const [orderId, setOrderId] = useState("");

    const db = getFirestore();

/* traigo el context del cart*/
    const {cartTotal, cart, cartEmpty, idUpdate} = useCartContext();
/* creo un estado que contiene un objeto con los atributos del comprador*/
    const [buyerData, setBuyerData] = useState({
        name: "",
        phone: "",
        email: ""
    })
    /* funcion que toma los datos del input y los setea al objeto del estado buyerData*/
    const setData = (e) => {
        setBuyerData({
            ...buyerData,
            [e.target.name] : e.target.value
        });
    }

    const date = new Date();
	const orderDate = date.toLocaleDateString();
/* funcion que se dispara en onClick del form y envia la data a firebase*/
/* toma la promesa del addDoc y setea el orderID con el id de la orden de firebase*/
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
        /* actualizo el stock de los items del cart en firebase utilizando el array de id´s idUpdate*/
        const batch = writeBatch(db);
        idUpdate.forEach((id) => {
            const itemRef = doc(db, "items", id);
            const itemCart = cart.find(prod => prod.id === id);
            batch.update(itemRef, {stock: itemCart.stock});
        });
        batch.commit();
        cartEmpty();
    }
    
    /*renderizado condicional de la class para el ID de orden*/
    const idClass= orderId ? 'cartOrderCode' : "" ;

/* creo un array con los atributos (att) de los input*/
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
/* mapeo el array y creo los inputs del form con esos atributtos (att)*/
/* si la orden fue enviada se renderiza el numero de orden de firebase y el boton finalizar que borra el carrito*/ 

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