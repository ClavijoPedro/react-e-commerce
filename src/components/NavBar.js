import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import logoSport from './images/logoSport.svg'

export const NavBar = () => {
    const links = [
        {to: "/", path:"inicio"},
        {to: "/category/remeras", path:"remeras"},
        {to: "/category/pantalones", path:"pantalones"},
        {to: "/category/zapatillas", path:"zapatillas"},
    ]

    return (
        <>
        <div className="App-header">
            <nav className="nav">
                <Link to="/" >
                    <img src={logoSport} className='navBrand' alt="Logo" />
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
        <div className="App-headerResp">
            <Link to="/" >
                 <img src={logoSport} className='navBrand' alt="Logo" />
            </Link>
		    <input type="checkbox" id="btn_menu" />
		    <label htmlFor="btn_menu" className="btn_menu flex_column">
		    	<span id="btn_span_1" className="btn_span"></span>
		    	<span id="btn_span_2" className="btn_span"></span>
		    	<span id="btn_span_3" className="btn_span"></span>
		    </label>
		    <div className="container_flex">
		    	<nav className=" container_menu ">
		    		<ul >
                        {links.map(link => 
                            <li key={link.path}><Link to={link.to}>{link.path}</Link></li>
                        )}
		    		</ul>
                    <CartWidget />
		    	</nav>
		    </div>
	    </div>
        </>
    );  
}
