export const Button = (props) => {

    return (
        <button className="button" href= {props.link}>{props.action}</button>
    )
}