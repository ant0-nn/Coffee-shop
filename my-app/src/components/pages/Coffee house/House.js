import "./house.scss";

import coffee from "../../../resources/img/coffee beans.png"

const House = () => {
    return (
        <div className="house">
            <div className="house__container">
                <div className="house__header">
                    <h1 className="house__header__title">Everything You Love About Coffee</h1>
                    <div className="house__header__decor">
                        <div className="house__header__line"></div>
                        <img className="house__header__img" src={coffee} alt=""/>
                        <div className="house__header__line"></div>
                    </div>
                    <h2 className="house__header__subtitle">
                        We makes every day full of energy and taste Want to try our beans?
                    </h2>
                    <h2 className="house__header__subtitle2">
                        Want to try our beans?
                    </h2>
                    <button  className="house__header__btn">
                        More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default House;