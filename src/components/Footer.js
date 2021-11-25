import { Link } from "react-router-dom"

export const Footer = () => {
    const link= "https://github.com/ClavijoPedro";
    return(
        <footer className="footerContainer">
            <a href={link} target="_blank" className="footerLink">App created by Pedro Clavijo</a>   
        </footer>
    )
}