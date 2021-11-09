import { Link } from 'react-router-dom';
import cartIcon from './images/cartIcon.png';

export const CartWidget = () =>{  
    return(
        <Link to="/cart"><img src={cartIcon} className='iconCart' alt="cartIcon" /></Link>
    );
}