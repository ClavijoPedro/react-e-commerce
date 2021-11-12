import { useState } from 'react';
// import { useCartContext } from '../contexts/CartContext';
import { Button } from './Button';
import {ItemCount} from './ItemCount';

export const ItemDetail = ({item}) => {
    /*creo el estado para el componente itemCount*/
    const [count, setCount] = useState(true)
    const[amount, setAmount] = useState(0)
    
    const countDismount = (amount) => {
        if(count){
            setCount(false)
            setAmount(amount)
        }
    }
    /*tomo la props item que pase por parametro y renderizo el producto*/
    /*si count es true renderizo el itemcount sino renderizo el button ir al carrito*/
    return(
        <div className="itemDetail">
            <div className="itemDetailBody">
                <img className="detailImg" src={item.image} alt="detailImg" />
                <div className="itemDetailInfo">
                    <h2 className="itemDetailName">{item.type} {item.name}</h2>
                    <p className="itemDetailText">{item.description}</p>
                    <p>${item.price}</p>
                    {count ? 
                    <ItemCount stock={item.stock} initial={1} item= {item} onAdd= {countDismount} /> 
                    : <Button link= "/cart" action={`Ver ${amount} productos`}/> }
                </div>
            </div>
        </div>
    );
}