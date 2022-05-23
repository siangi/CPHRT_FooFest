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
import Navigation from "./components/Navigaton";
import Footer from "./components/Footer";
import Overview from "./pages/Overview";

export const AllBandsContext = React.createContext();
export const SetAllBandsContext = React.createContext();

export default function App() {
  const [allBands, setAllBands] = useState([]);

  const getBands = axios.get("https://cphrt.herokuapp.com/bands");
  const getStages = axios.get("https://cphrt.herokuapp.com/schedule");

  useEffect(() => {
    Promise.all([getBands, getStages])
      .then((allData) => {
        const allBandsData = allData[0].data;
        const allStagesData = allData[1].data;
        const Days = {
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday",
          sun: "Sunday",
        };
        function makeStageData() {
          return allBandsData.map((item) => {
            let url = item.logo.includes("http://")
              ? item.logo
              : `https://cphrt.herokuapp.com/logos/${item.logo}`;

            for (const stage in allStagesData) {
              for (const day in allStagesData[stage]) {
                for (let i = 0; i < allStagesData[stage][day].length; i++) {
                  const e = allStagesData[stage][day][i];
                  let color;
                  let runeUrl;

                  if (stage === "Midgard") {
                    color = "accent_red";
                    runeUrl = "midgard.svg";
                  } else if (stage === "Vanaheim") {
                    color = "accent_blue";
                    runeUrl = "vanaheim.svg";
                  } else {
                    color = "accent_yellow";
                    runeUrl = "jotunheim.svg";
                  }

                  if (e.act === item.name) {
                    item = {
                      ...item,
                      logo: url,
                      start: e.start,
                      end: e.end,
                      stage: stage,
                      day: Days[day],
                      color: color,
                      runeUrl: runeUrl,
                      favorite: false,
                      cancelled: e.cancelled,
                    };
                  }
                }
              }
            }

            return item;
          });
        }

        setAllBands(() => makeStageData());
      })
      .catch((errors) => {
        console.error(errors);
      });
  }, []);

  return (
    <div className="App bg-darkmode_black">
      <Navigation></Navigation>

      <AllBandsContext.Provider value={allBands}>
        <SetAllBandsContext.Provider value={setAllBands}>
          <div className="px-14 md:px-40">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/overview" element={<Overview />}></Route>
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
              </Route>
            </Routes>
          </div>
          <Footer></Footer>
        </SetAllBandsContext.Provider>
      </AllBandsContext.Provider>
    </div>
  );
}
