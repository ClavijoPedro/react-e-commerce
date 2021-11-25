import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

export const CartOrder = () =>{
    const [orderSended, setOrderSended] = useState(false)
    const [orderId, setOrderId] = useState("")
    
    const db = getFirestore();

/* traigo el context del cart*/
    const {cartTotal, cart, cartEmpty} = useCartContext();
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
/* funcion que se dispara en onClick del form y envia la data a firebase*/
/* toma la promesa del addDoc y setea el orderID con el id de la orden de firebase*/
    const sendOrder = () => {
        const itemOrder = {
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
    
/* creo un array con los atributos (att) de los input*/
    const input = [
        {value:buyerData.name, type: "text", pholder: "ingrese su nombre", name: "name"},
        {value:buyerData.phone,type: "tel", pholder: "ingrese su telefono", name: "phone"},
        {value:buyerData.email,type: "email", pholder: "ingrese su email", name: "email"},
    ]
/* mapeo el array y creo los inputs del form con esos atributtos (att)*/
/* si la orden fue enviada se renderiza el numero de orden de firebase y el boton finalizar que borra el carrito*/


    return (
        <>
            {!orderSended &&
            <form className="cartOrderContainer">
                {input.map(att => <input value={att.value} key={att.name} type={att.type} onChange={setData} placeholder={att.pholder} name={att.name}/>)}
                <button  disabled={!(buyerData.name && buyerData.phone && buyerData.email)} type="button" onClick={sendOrder} className="btn" >enviar orden</button>
            </form>
            }
            {orderSended &&
                <div className="cartOrderSended">
                    <p>El código de su pedido es:</p>
                    <span>{orderId}</span>
                    <Link to="/">
                        <button type="button"  onClick={cartEmpty} className="btn">finalizar</button>
                    </Link>
                </div>
            }
        </>
    )
}