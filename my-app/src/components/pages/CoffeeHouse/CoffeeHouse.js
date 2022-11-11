import "./coffeeHouse.scss";
import Decor from "../../decor/Decor";

import coffee from "../../../resources/img/coffee beans.png";
import icon1 from "../../../resources/img/icon1.png";
import icon2 from "../../../resources/img/icon2.png";
import icon3 from "../../../resources/img/icon3.png";

const CoffeeHouse = () => {
    return (
        <div className="house">
            <div className="house__header">
                <div className="house__container">
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
                    <button className="house__header__btn">
                        More
                    </button>
                </div>
            </div>
            <div className="house__about">
                <div className="house__container">
                    <h2 className="house__about__title">About Us</h2>
                    <Decor/>
                    <p className="house__about__info">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.<br/> <br/> Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.
                    </p>
                </div>
            </div>
            <div className="house__best">
                <div className="house__container">
                    <h2 className="house__best__title">Our best</h2>
                    <div className="house__best__product">
                        <div className="house__best__item">
                            <img className="house__best__item__img" src={icon1} alt=""/>
                            <h3 className="house__best__item__title">
                                Solimo Coffee Beans 2 kg <span>10.73$</span>
                            </h3>
                        </div>
                        <div className="house__best__item">
                            <img className="house__best__item__img" src={icon2} alt=""/>
                            <h3 className="house__best__item__title">
                                Presto Coffee Beans 1 kg <span>15.99$</span>
                            </h3>
                        </div>
                        <div className="house__best__item">
                            <img className="house__best__item__img" src={icon3} alt=""/>
                            <h3 className="house__best__item__title">
                                AROMISTICO Coffee 1 kg <span>6.99$</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoffeeHouse;