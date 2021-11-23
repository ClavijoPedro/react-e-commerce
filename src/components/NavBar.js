import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import logo from './images/logo.svg';

export const NavBar = () => {
    const links = [
        {to: "/", path:"inicio"},
        {to: "/category/remeras", path:"remeras"},
        {to: "/category/pantalones", path:"pantalones"},
        {to: "/category/zapatillas", path:"zapatillas"},
    ]
    return (
        <div className="App-header">
            <nav className="nav">
                <Link to="/" >
                    <img src={logo} className='navBrand' alt="Logo" />
                </Link>
                <div className="navLinks">
                    <ul>
                        {links.map(link => 
                            <li key={link.path}><Link to={link.to}>{link.path}</Link></li>
                        )}
                    </ul>  
                </div>
                <CartWidget />
            </nav>
        </div>
    );  
}
