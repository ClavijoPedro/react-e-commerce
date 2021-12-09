import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";
import { Loader } from "./Loader";
import { getFirestore } from "../firebase"; 
import { doc, getDoc} from "@firebase/firestore";

export const ItemDetailContainer = () => {
    const [itemSelected, setItemSelected] = useState(null);
    const {itemId} = useParams();
 
    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", itemId);
        getDoc(itemRef).then((snapshot) => {
            if(snapshot.exists()){
                setItemSelected({...snapshot.data(), id: itemId});
            }
        })
        .catch((err) => {console.log("error " + err)});
    }, [itemId]);


    return (
        <section className="itemDetailContainer">
            {itemSelected ? <ItemDetail item={itemSelected} /> : <Loader />} 
        </section>
        
    )
}