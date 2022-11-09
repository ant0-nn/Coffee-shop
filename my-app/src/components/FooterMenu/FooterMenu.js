import "./FooterMenu.scss";
import logo from "../../resources/img/black-logo.png";
import {NavLink} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <div className="footer">
            <div className="footer__menu">
                <img src={logo} alt="logo"/>
                <ul className="footer__menu__list">
                    <li className="footer__menu__item"><NavLink className="footer__menu__item__link" to="/">Coffee house</NavLink></li>
                    <li className="footer__menu__item"><NavLink className="footer__menu__item__link" to="/ourCoffee">Our coffee</NavLink></li>
                    <li className="footer__menu__item"><NavLink className="footer__menu__item__link" to="/forYourPleasure">For your pleasure</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderMenu;