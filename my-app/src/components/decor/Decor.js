import "./decor.scss";

import coffee from "../../resources/img/coffee-beans-black.png"

const Decor = () => {
    return (
        <div className="decor">
            <div className="decor__line"></div>
            <img className="decor__img" src={coffee} alt=""/>
            <div className="decor__line"></div>
        </div>
    )
}

export default Decor;