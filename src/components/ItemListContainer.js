import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import Products from '../Products.json'
import { useParams } from "react-router";

export const ItemListContainer = () => {
    const {categoryId} = useParams();  
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
    console.log(useParams())    
    useEffect(() => {
        getItems(Products)
        .then(res => {
            categoryId ? setItem(res.filter(prod => prod.type === categoryId)) : setItem(res);
        })
        .catch((error) => console.log(error))
        .finally(console.log("item list printed"))
        
    }, [categoryId]);

    return(
        /*le asigno una prop items que tiene el como valor la variable item de la promise*/
        <section className="itemList">
            <div className="cardContainer">
                <ItemList items={item} />
            </div>
        </section>
    );
}