import { useEffect, useState } from "react"
import Products from '../Products.json'
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
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
        .then(result => setItemSelected(result[1]))
        .catch((err) => console.log(err))
        .finally(console.log("detalle de item impreso"));
    }, []);

    console.log(`esto es item detailconatiner ${itemSelected}`);
    return (

        <>
            <ItemDetail item={itemSelected} />
        </>
        
    )
}