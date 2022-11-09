
import logo from "../../resources/img/logo.png";
import {NavLink} from "react-router-dom";

import "./Menu.scss";

const Menu = () => {
    return (
        <div className="menu">
            <img src={logo} alt="logo"/>
            <ul className="menu__list">
                <li className="menu__item"><NavLink className="menu__item__link" to="/">Coffee house</NavLink></li>
                <li className="menu__item"><NavLink className="menu__item__link" to="/our coffee">Our coffee</NavLink></li>
                <li className="menu__item"><NavLink className="menu__item__link" to="/for your pleasure">For your pleasure</NavLink></li>
            </ul>
        </div>
    );
}

export default Menu