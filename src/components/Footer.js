import { Link } from "react-router-dom"
import logo from "./images/logo.svg"

export const Footer = () => {

    return(
        <div className="footerContainer">
            <Link to="/" >
                <img src={logo} className='navBrand' alt="Logo" />
             </Link>
            <div className="contactContainer">
                <ul className="contactInfo">
                    <li>Dirección: Av. Maipú 2000</li>
                    <li>Tel: 4743-8500</li>
                    <li>email: e-commerce@gmail.com</li>
                </ul>
            </div>
        </div>
    )
}