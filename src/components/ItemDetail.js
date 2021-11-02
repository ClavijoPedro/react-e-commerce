import {Counter} from './Counter';

export const ItemDetail = ({item}) => {
    console.log(item)
    return(
        <div className="detailContainer">
            <div className="itemDetailHeader">
                <h2 className="itemDetailName">{item.type} {item.name}</h2>
            </div>
            <div className="itemDetailBody">
                <img className="detailImg" src={item.image} alt="detailImg" />
                <div className="itemDetailInfo">
                    <p className="itemDetailText">{item.description}</p>
                    <p>${item.price}</p>
                    <Counter stock={2} initial={1} />
                </div>
            </div>
        </div>
    );
}