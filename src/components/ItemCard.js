import { Counter } from "./Counter";


export const ItemCard = ({image, name, price}) =>{
    return (
        <div className="card">
            <img className="cardImg" src={image} alt="img Producto" />
            <div className="cardBody">
                <h5 className="cardTitle">{name}</h5>
                <p>${price}</p>
                <Counter stock={2} initial={1}/>
            </div>
        </div>
    );
}
