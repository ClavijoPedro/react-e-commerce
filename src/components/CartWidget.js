import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import cartIcon from './images/cartIcon.svg';
import cartFull from './images/cartFull.svg'

export const CartWidget = () =>{ 
    const {cart} = useCartContext();
    
    return(
        <Link to="/cart">
            <div className="cartWidget">
                <img src={cart.length ? cartFull : cartIcon} className='iconCart' alt="cartIcon" />
                {cart.length > 0 && <p className="iconCartCount">{cart.length}</p>}
            </div>
        </Link>
    );
}