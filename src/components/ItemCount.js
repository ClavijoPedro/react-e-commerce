import { useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
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
            <button className="btn" type="button" onClick={() => onAdd(counter)}>Agregar al Carrito</button>
        </>
    );
}