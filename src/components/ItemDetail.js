import { useState } from 'react';
import { Button } from './Button';
import {ItemCount} from './ItemCount';

export const ItemDetail = ({item}) => {
    const [count, setCount] = useState(true)
    
    const countDismount = () => {
        if(count){
            setCount(false)
        }
    }
    
    return(
        <div className="itemDetail">
            <div className="itemDetailBody">
                <img className="detailImg" src={item.image} alt="detailImg" />
                <div className="itemDetailInfo">
                    <h2 className="itemDetailName">{item.name}</h2>
                    <p className="itemDetailText">{item.description}</p>
                    <p>${item.price}</p>
                    {count ? 
                    <>
                        <ItemCount stock={item.stock} initial={1} item= {item} onAdd= {countDismount} />
                        <Button link= "/" action="volver" />
                    </> 
                    : 
                    <>
                        <Button link= "/cart" action={`Terminar compra`}/>
                        <Button link= "/" action="volver" /> 
                    </>}
                </div>
            </div>
        </div>
    );
}