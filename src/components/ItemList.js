import { Item } from "./Item";

export const ItemList = ({ items }) => {
    /*recibe la prop items (items={item}) que es el array de productos asignados a 
    traves de la variable item de la promise en itemlistcontainer*/ 
    console.log(`esto es item list ${items}`)
    
    return (
        /*si items es true mapea los productos al componente item sino renderiza loading...*/
        <>
            {items ? items.map(producto =>
             <Item item={producto} key={producto.id} /> 
            ) : "loading items..."}
        </>
    )
}