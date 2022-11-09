import Header from "../header/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {House, OurCoffee, ForYourPleasure} from "../pages"


const App = () => {
    return (
        <Router>
            <div className="container">
                <Header/>
                <Routes>
                    <Route exact path="/" element={<House/>}/>
                    <Route exact path="/our coffee" element={<OurCoffee/>}/>
                    <Route exact path="/for your pleasure" element={<ForYourPleasure/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;