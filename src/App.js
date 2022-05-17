import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Favorites from "./pages/Favorites";
import Shop from "./pages/Shop";
import Overview from "./pages/Overview";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Header!</h1>
      </header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/schedule" element={<Schedule></Schedule>}></Route>
        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
      </Routes>
    </div>
  );
}

export default App;
