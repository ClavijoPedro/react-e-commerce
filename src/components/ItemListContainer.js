import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
// import Products from '../Products.json'
import { useParams } from "react-router";
import { getFirestore } from "../firebase"; 
import { collection, query, where, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
    const {categoryId} = useParams();  
    const [items, setItems] = useState(null);
    
    useEffect(() => {
        /*guardo la base de datos (db) en una variable */
        const db = getFirestore();
            /*filtro la collección por categorias usando url params, sino muestro lista entera*/ 
            const q = categoryId ? query(collection(db, "items"),
            where("type", "==", categoryId)) 
            : collection(db, "items");
            /* seteo la data al estado de items */
            getDocs(q).then((snapshot) => {
                setItems(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            })
            .catch((err) => {console.log("error " + err)});
  
    }, [categoryId]);

    return(
        /*le asigno una prop items que tiene el como valor la variable item de la promise*/
        <section className="itemList">
            <div className="cardContainer">
                <ItemList items={items} />
            </div>
        </section>
    );
}