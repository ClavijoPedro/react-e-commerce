import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";
import { Loader } from "./Loader";
import { getFirestore } from "../firebase"; 
import { doc, getDoc} from "@firebase/firestore";

export const ItemDetailContainer = () => {
    /* traigo el parametro de url*/
    const [itemSelected, setItemSelected] = useState(null);
    const {itemId} = useParams();
 
    useEffect(() => {
        /*guardo la base de datos en una variable*/
        const db = getFirestore();
        /*filtro la data con ulr param*/
        const itemRef = doc(db, "items", itemId);
        /* seteo la data al estado del item*/ 
        getDoc(itemRef).then((snapshot) => {
            if(snapshot.exists()){
                /* seteo la data al estado y le modifico el id por el de firebase*/
                setItemSelected({...snapshot.data(), id: itemId});
            }
        })
        .catch((err) => {console.log("error " + err)});
    }, [itemId]);


    return (
        /*paso por props el resultado de la promise a itemdetail*/
        <section className="itemDetailContainer">
            {itemSelected ? <ItemDetail item={itemSelected} /> : <Loader />} 
        </section>
        
    )
}