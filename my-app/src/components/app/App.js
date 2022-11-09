<<<<<<< HEAD
import Header from "../header/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {House, OurCoffee, ForYourPleasure} from "../pages"

=======
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {CoffeeHouse, OurCoffee, ForYourPleasure} from "../pages"
import FooterMenu from "../FooterMenu/FooterMenu";
import Decor from "../decor/Decor";
>>>>>>> b6b7644 (first commit)

const App = () => {
    return (
        <Router>
            <div className="container">
<<<<<<< HEAD
                <Header/>
                <Routes>
                    <Route exact path="/" element={<House/>}/>
                    <Route exact path="/our coffee" element={<OurCoffee/>}/>
                    <Route exact path="/for your pleasure" element={<ForYourPleasure/>}/>
                </Routes>
=======
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
>>>>>>> b6b7644 (first commit)
            </div>
        </Router>
    )
}

export default App;