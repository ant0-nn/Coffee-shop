import HeaderMenu from "../HeaderMenu/HeaderMenu";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {CoffeeHouse, OurCoffee, ForYourPleasure} from "../pages"
import FooterMenu from "../FooterMenu/FooterMenu";
import Decor from "../decor/Decor";


const App = () => {
    return (
        <Router>
            <div className="container">
                <HeaderMenu/>
                <Routes>
                    <Route exact path="/" element={<CoffeeHouse/>}/>
                    <Route exact path="/our coffee" element={<OurCoffee/>}/>
                    <Route exact path="/for your pleasure" element={<ForYourPleasure/>}/>
                </Routes>
                <HeaderMenu/>
                <Routes>
                    <Route exact path="/" element={<CoffeeHouse/>}/>
                    <Route exact path="/ourCoffee" element={<OurCoffee/>}/>
                    <Route exact path="/forYourPleasure" element={<ForYourPleasure/>}/>
                </Routes>
                <div className="footer__container">
                    <FooterMenu/>
                    <Decor/>
                </div>

            </div>
        </Router>
    )
}

export default App;