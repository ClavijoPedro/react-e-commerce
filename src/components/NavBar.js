import { CartWidget } from './CartWidget';
import logo from './images/logo.svg';

export const NavBar = () => {
    return (
        <div className="App-header">
            <nav className="nav">
                <a href="/" >
                    <img src={logo} className='navBrand' alt="Logo" />
                </a>
                <div className="navLinks">
                    <ul>
                        <li><a href="/#">Inicio</a></li>
                        <li><a href="/#">remeras</a></li>
                        <li><a href="/#">pantalones</a></li>
                        <li><a href="/#">zapatillas</a></li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </div>
    );  
}
