import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import logo from './images/logo.svg';

export const NavBar = () => {
    return (
        <div className="App-header">
            <nav className="nav">
                <Link to="/" >
                    <img src={logo} className='navBrand' alt="Logo" />
                </Link>
                <div className="navLinks">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/category/remeras">remeras</Link></li>
                        <li><Link to="/category/pantalones">pantalones</Link></li>
                        <li><Link to="/category/zapatillas">zapatillas</Link></li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </div>
    );  
}
