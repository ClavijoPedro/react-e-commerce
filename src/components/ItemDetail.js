import { useState } from 'react';
import { Button } from './Button';
import {ItemCount} from './ItemCount';

export const ItemDetail = ({item}) => {
    /*creo el estado para el componente itemCount*/
    const [itemsToCart, setItemsToCart] = useState(true)
    
    const itemQty = (qty) => {
        if(itemsToCart){
            setItemsToCart(false)
        }
    }
    
    
    /*tomo la props item que pase por parametro y renderizo el producto*/
    return(
        <div className="detailContainer">
            <div className="itemDetailHeader">
                <h2 className="itemDetailName">{item.type} {item.name}</h2>
            </div>
            <div className="itemDetailBody">
                <img className="detailImg" src={item.image} alt="detailImg" />
                <div className="itemDetailInfo">
                    <p className="itemDetailText">{item.description}</p>
                    <p>${item.price}</p>
                    {itemsToCart ? 
                    <ItemCount stock={item.stock} initial={1} onAdd={itemQty} /> 
                    : <Button link= "/cart" action="Ir al Carrito" /> 
                    }
                </div>
            </div>
        </div>
    );
}