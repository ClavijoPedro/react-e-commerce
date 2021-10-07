
import logo from '../images/logo.svg';

export const NavHeader = () => {
    return (
        <nav className="nav">
            <a href="/#" >
                <img src={logo} className='navBrand' alt="Logo" />
            </a>
            <div className="navLinks">
                <ul>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">Productos</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );  
}
