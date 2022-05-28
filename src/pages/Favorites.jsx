import React, { useState, useEffect } from "react";
import H1 from "../components/typography/H1";
import FavoriteCol from "../components/favoritesComponents/FavoriteCol";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import { IconContext } from "react-icons";

export const BandContext = React.createContext();

export default function Favorites() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [colIndex, setColIndex] = useState(0);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  });

  return (
    <>
      <H1>Favorites</H1>

      <section className="grid grid-cols-4 sm:flex gap-10 items-baseline">
        <IconContext.Provider value={{ size: 45, color: "white" }}>
          <button
            className={`${
              colIndex === 0 && "invisible"
            } row-start-1 row-end-2 col-start-1 col-end-2 z-10`}
          >
            <HiOutlineArrowNarrowLeft
              onClick={() => setColIndex((prev) => prev - 1)}
            />
          </button>

          {days
            .slice(
              colIndex,
              screenWidth > 1000
                ? colIndex + 3
                : screenWidth < 800
                ? colIndex + 1
                : colIndex + 2
            )
            .map((day, index) => (
              <FavoriteCol key={index} day={day} />
            ))}

          <button
            className={`${
              (colIndex === 4 || colIndex === 5 || colIndex === 6) &&
              screenWidth > 1000
                ? "invisible"
                : (colIndex === 5 || colIndex === 6) &&
                  screenWidth > 800 &&
                  screenWidth < 1000
                ? "invisible"
                : colIndex === 6 && screenWidth < 800
                ? "invisible"
                : ""
            } row-start-1 row-end-2 col-start-4 col-end-5 z-10 justify-self-end`}
          >
            <HiOutlineArrowNarrowRight
              onClick={() => setColIndex((prev) => prev + 1)}
            />
          </button>
        </IconContext.Provider>
      </section>
    </>
  );
}
