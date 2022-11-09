import "./headerMenu.scss";
import logo from "../../resources/img/logo.png";
import {NavLink} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <div className="header">
            <div className="menu">
                <img src={logo} alt="logo"/>
                <ul className="menu__list">
                    <li className="menu__item"><NavLink className="menu__item__link" to="/">Coffee house</NavLink></li>
                    <li className="menu__item"><NavLink className="menu__item__link" to="/ourCoffee">Our coffee</NavLink></li>
                    <li className="menu__item"><NavLink className="menu__item__link" to="/forYourPleasure">For your pleasure</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderMenu;