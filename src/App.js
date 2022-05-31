import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Favorites from "./pages/Favorites";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";

import CampgroundForm from "./pages/ShopSubPages/CampgroundForm";
import TentForm from "./pages/ShopSubPages/TentForm";
import TicketForm from "./pages/ShopSubPages/TicketForm";
import PersonalInfo from "./pages/ShopSubPages/PersonalInfo";
import Navigation from "./components/Navigaton";
import Footer from "./components/Footer";
import Lineup from "./pages/Lineup";

export const AllBandsContext = React.createContext();
export const SetAllBandsContext = React.createContext();

export default function App() {
  const [allBands, setAllBands] = useState([]);

  useEffect(() => {
    axios
      .get("https://cphrt1.herokuapp.com/allbands")
      .then(function ({ data }) {
        setAllBands(data);
      })

      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="App bg-darkmode_black">
      <Navigation></Navigation>

      <AllBandsContext.Provider value={allBands}>
        <SetAllBandsContext.Provider value={setAllBands}>
          <div className="px-8 md:px-14 lg:px-20">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/lineup" element={<Lineup />}></Route>
              <Route path="/schedule" element={<Schedule></Schedule>}></Route>
              <Route
                path="/favorites"
                element={<Favorites></Favorites>}
              ></Route>
              <Route path="/shop" element={<Shop></Shop>}>
                <Route
                  path="/shop/"
                  element={<TicketForm></TicketForm>}
                ></Route>
                <Route
                  path="/shop/tickets"
                  element={<TicketForm></TicketForm>}
                ></Route>
                <Route
                  path="/shop/tents"
                  element={<TentForm></TentForm>}
                ></Route>
                <Route
                  path="/shop/campground"
                  element={<CampgroundForm></CampgroundForm>}
                ></Route>
                <Route
                  path="/shop/personal-info"
                  element={<PersonalInfo></PersonalInfo>}
                ></Route>
              </Route>
            </Routes>
          </div>
          <Footer></Footer>
        </SetAllBandsContext.Provider>
      </AllBandsContext.Provider>
    </div>
  );
}
