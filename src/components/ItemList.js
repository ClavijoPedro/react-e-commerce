import { Item } from "./Item";
import { Loader } from "./Loader";

export const ItemList = ({ items }) => {

    return (
        <>
            {items ? items.map(producto =>
             <Item item={producto} key={producto.id} /> 
            ) :<Loader />}
        </>
    )
}