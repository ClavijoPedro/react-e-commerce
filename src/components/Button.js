import { Link } from "react-router-dom"

export const Button = ({link, action}) => {

    return (
        <Link to={link}>
            <button type="button" className="btn">{action}</button>
        </Link>
    )
}