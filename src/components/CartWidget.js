import cartIcon from './images/cartIcon.png';

export const CartWidget = () =>{  
    return(
        <a href="/"><img src={cartIcon} className='iconCart' alt="cartIcon" /></a>
    );
}