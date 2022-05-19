import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Favorites from "./pages/Favorites";
import Shop from "./pages/Shop";
import Overview from "./pages/Overview";

export const AllBandsContext = React.createContext();

function App() {
  const [allBands, setAllBands] = useState([]);

  useEffect(() => {
    const getBands = axios.get("https://cphrt.herokuapp.com/bands");
    const getStages = axios.get("https://cphrt.herokuapp.com/schedule");

    Promise.all([getBands, getStages])
      .then((allData) => {
        const allBandsData = allData[0].data;
        const allStagesData = allData[1].data;

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
                      day: day,
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
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Header!</h1>
      </header>
      <AllBandsContext.Provider value={allBands}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/schedule" element={<Schedule></Schedule>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
        </Routes>
      </AllBandsContext.Provider>
    </div>
  );
}

export default App;
