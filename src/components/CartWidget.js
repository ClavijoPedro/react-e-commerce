import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import cartIcon from './images/cartIcon.png';

export const CartWidget = () =>{ 
    const {cart} = useCartContext();
    console.log("esto es", cart.length) 
    return(
        <Link to="/cart">
            <div className="cartWidget">
                <img src={cartIcon} className='iconCart' alt="cartIcon" />
                {cart.length > 0 && <p className="iconCartCount">{cart.length}</p>}
            </div>
        </Link>
    );
}