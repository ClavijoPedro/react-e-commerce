import { Counter } from "./Counter";
import imgItem from './images/imgItem.jpg'



export const ItemCard = () =>{
    return (
        <div className="card">
            <img className="cardImg" src={imgItem} alt="img Producto" />
            <div className="cardBody">
                <h5 className="cardTitle">Nombre de producto</h5>
                <Counter stock={2} initial={1}/>
            </div>
        </div>
    );
}
