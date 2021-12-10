import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router";
import { getFirestore } from "../firebase"; 
import { collection, query, where, getDocs } from "firebase/firestore";
import { useCartContext } from "../contexts/CartContext";

export const ItemListContainer = () => {
    const {categoryId} = useParams();  
    const [items, setItems] = useState(null);
    const {idUpdate} = useCartContext();
    
    useEffect(() => {
        const db = getFirestore();
            const q = categoryId ? query(collection(db, "items"),
            where("type", "==", categoryId)) 
            : collection(db, "items");
            getDocs(q).then((snapshot) => {
                setItems(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            })
            .catch((err) => {console.log("error " + err)});
    }, [categoryId, idUpdate]);

    return(
        <section className="itemList">
            <div className="cardContainer">
                <ItemList items={items} />
            </div>
        </section>
    );
}