import { Link } from "react-router-dom";

export const Item = ({item}) =>{
/*recive la prop item (item={pructos}) asignada en itemList e imprime las propiedades de cada uno en una card*/ 
    return (
        <div className="card">
            <img className="cardImg" src={item.image} alt="img Producto" />
            <div className="cardBody">
                <h5 className="cardTitle">{item.name}</h5>
                <p>${item.price}</p>
                <Link to={`/item/${item.id}`}>
                    <button className="btn">ver detalle</button>
                </Link>
            </div>
        </div>
    );
}
