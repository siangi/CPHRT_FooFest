import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Favorites from "./pages/Favorites";
import Shop from "./pages/Shop";
import BurgerMenu from "./components/navigation/BurgerMenu";


function App() {
    return (
        <div className="App bg-darkmode_black">
            <header className="App-header">
                <BurgerMenu/>
                {/* <Link to="/"><img src="" alt="ragnarock logo"></img></Link> */}
            </header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/schedule" element={<Schedule></Schedule>}></Route>
                <Route path="/favorites" element={<Favorites></Favorites>}></Route>
                <Route path="/shop" element={<Shop></Shop>}></Route>
            </Routes>
      
        </div>
    );
}

export default App;
