import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Favorites from "./pages/Favorites";
import Shop from "./pages/Shop";
import TicketForm from "./pages/ShopSubPages/TicketForm";
import TentForm from "./pages/ShopSubPages/TentForm";
import GreenCamping from "./pages/ShopSubPages/GreenCamping";
import Footer from "./components/Footer";
import BurgerMenu from "./components/navigation/BurgerMenu";

function App() {
    return (
        <div className="App bg-darkmode_black flex flex-col min-h-screen justify-between px-5 md:px-10 lg:px-20">
            <header className="App-header">
                <BurgerMenu />
            </header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/schedule" element={<Schedule></Schedule>}></Route>
                <Route path="/favorites" element={<Favorites></Favorites>}></Route>
                <Route path="/shop" element={<Shop></Shop>}>
                    <Route path="/shop/" element={<TicketForm></TicketForm>}></Route>
                    <Route path="/shop/tickets" element={<TicketForm></TicketForm>}></Route>
                    <Route path="/shop/tents" element={<TentForm></TentForm>}></Route>
                    <Route path="/shop/green-camping" element={<GreenCamping></GreenCamping>}></Route>
                </Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
