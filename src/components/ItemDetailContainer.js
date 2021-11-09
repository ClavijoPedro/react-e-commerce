import { useEffect, useState } from "react"
import { useParams } from "react-router";
import Products from '../Products.json'
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    /* traigo el parametro de url*/
    const {id} = useParams()
    /* genero el estado y la promesa*/
    const [itemSelected, setItemSelected] = useState([]);
    const getItem = (item) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(item) {
                resolve(item);
            }else{
                reject("detalle de producto no encontrado");
            }
        },500);
    });


    useEffect(() => {
        getItem(Products)
        .then(res => {
            /* filtro el resultado y comparo el id de producto con la url param*/
            const filterItem = res.find(product => product.id === id)
            /*seteo el producto filtrado al estado*/
            setItemSelected(filterItem)})
        .catch((err) => console.log(err))
        .finally(console.log("detalle de item impreso"));
    }, [id]);

    /*si  no es itemSelected que devuelva null y no renderice nada*/ 
    if(!itemSelected) return null;

    return (
        /*paso por props el resultado de la promise a itemdetail*/
        <section>
            {itemSelected ? <ItemDetail item={itemSelected} /> : "cargando item..."} 
        </section>
        
    )
}