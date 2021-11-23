import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../contexts/CartContext";

export const CartOrder = () =>{

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
/* funcion que se dispara en onClick del form y envia la data a firebase y vacia el carrito*/
    const sendOrder = () => {
        const itemOrder = {
            buyer: buyerData,
            items: [...cart],
            total: cartTotal
        };
        const db = getFirestore();
        const orderList = collection(db, "orders");
        addDoc(orderList, itemOrder); 
        cartEmpty(); 
    }
/* creo un array con los atributos (att) de los input*/
    const input = [
        {type: "text", pholder: "ingrese su nombre", name: "name"},
        {type: "tel", pholder: "ingrese su telefono", name: "phone"},
        {type: "email", pholder: "ingrese su email", name: "email"},
    ]
/* mapeo el array y creo los inputs del form con esos atributtos (att)*/
    return (
        <form className="cartOrderContainer">
            {input.map(att => <input type={att.type} onChange={setData} placeholder={att.pholder} name={att.name}/>)}
            <button type="button" onClick={sendOrder} className="btn">enviar orden</button>
        </form>
    )
}