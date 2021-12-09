import { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';

export const ItemCount = ({initial, stock, onAdd, item}) => {
    /*agrego el cart context con sus metodos*/
    const {addItem} = useCartContext();

    /*seteo el estado del counter */
    const [counter, setCounter] = useState(initial);
    
    const sum = () => {
        if(stock > 0 && (counter < stock )){
            setCounter(counter + 1); 
        }
    };

    const rest = () => {
        if(counter > 1){
            setCounter(counter - 1)};
        }
        
    const itemToCart = () => {
        addItem(item, counter);
        onAdd(counter);
    }
        
    return (
        <>
            <div className="counter">
                <div className="itemCount">
                    <button className="btnCounter" onClick = {rest}>-</button>
                    <p className="qtyCounter">{counter}</p>
                    <button className="btnCounter" onClick = {sum}>+</button> 
                    <p className="itemStock">Stock <span>{stock}</span></p>
                </div>
            </div>
            <button className="btn" type="button" onClick={itemToCart}>Agregar al Carrito</button>
        </>
    );
}