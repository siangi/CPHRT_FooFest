import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Favorites from "./pages/Favorites";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Header from "./components/Header";



function App() {
    return (
        <div className="App bg-darkmode_black">
            <Header></Header>

            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/schedule" element={<Schedule></Schedule>}></Route>
                <Route path="/favorites" element={<Favorites></Favorites>}></Route>
                <Route path="/shop" element={<Shop></Shop>}></Route>
            </Routes>
            <Footer></Footer>
      
        </div>
    );
}

export default App;
