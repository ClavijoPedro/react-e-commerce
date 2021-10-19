import { useState } from 'react';

export const Counter = ({initial, stock}) => {
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
    const itemAdd = () => {
        if(stock === 0){
           alert("no hay Stock Disponible");  
        }else{
            alert("Item Agregado");
        }
    }  
    return (
        <>
            <div className="counter">
                <div className="itemStock">
                    <p>Stock <span>{stock}</span></p>
                </div>
                <div className="itemCount">
                    <button className="btnCounter" onClick = {rest}>-</button>
                    <p>{counter}</p>
                    <button className="btnCounter" onClick = {sum}>+</button> 
                </div>
            </div>
            <button className="btn" type="button" onClick={itemAdd}>Agregar al Carrito</button>
        </>
    );
}