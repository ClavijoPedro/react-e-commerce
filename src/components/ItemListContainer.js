import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import Products from '../Products.json'

export const ItemListContainer = () => {  
    const [item, setItem] = useState(null);  
    const getItems = (data) => 
        new Promise((resolve,reject) => {
            setTimeout(() => {
                if(data){
                    resolve(data);
                }else{
                    reject("ERROR NO HAY PRODUCTOS");
                }  
            }, 500);
        });
  
    useEffect(() => {
        getItems(Products)
        .then(result => (setItem(result)))
        .catch((error) => console.log(error))
        .finally(console.log("item list printed"))
        
    }, []);

    console.log(`esto es item list container ${item}`)

    return(
        /*le asigno una prop items que tiene el como valor la variable item de la promise*/
        <div className="cardContainer">
            <ItemList items={item} />
        </div>
    );
}