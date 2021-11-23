import { Item } from "./Item";
import { Loader } from "./Loader";

export const ItemList = ({ items }) => {
    /*recibe la prop items (items={item}) que es el array de productos asignados a 
    traves de la variable item de la promise en itemlistcontainer*/ 
 
    return (
        /*si items es true mapea los productos al componente item y lo pasa por parametro sino renderiza loading...*/
        <>
            {items ? items.map(producto =>
             <Item item={producto} key={producto.id} /> 
            ) :<Loader />}
        </>
    )
}