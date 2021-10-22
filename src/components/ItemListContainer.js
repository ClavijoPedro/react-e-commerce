export const ItemListContainer = (props) => {
    return(
        <>
        <h1 className="my-0">{props.greeting}</h1>
        <div className="cardContainer">
            {props.children}
        </div>
        </>

    );
}