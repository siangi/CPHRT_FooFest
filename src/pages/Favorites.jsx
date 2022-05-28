import React, { useState } from "react";
import H1 from "../components/typography/H1";
import FavoriteCol from "../components/favoritesComponents/FavoriteCol";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

export const BandContext = React.createContext();

export default function Favorites() {
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

  return (
    <>
      <H1>Favorites</H1>

      <section className="flex gap-10 items-baseline">
        <button className={`${colIndex === 0 && "invisible"} text-white`}>
          <HiOutlineArrowNarrowLeft
            size="2rem"
            onClick={() => setColIndex((prev) => prev - 1)}
          />
        </button>

        {days.slice(colIndex, colIndex + 3).map((day, index) => (
          <FavoriteCol day={day} index={index} colIndex={colIndex} />
        ))}

        <button className={`${colIndex === 4 && "invisible"} text-white`}>
          <HiOutlineArrowNarrowRight
            size="2rem"
            onClick={() => setColIndex((prev) => prev + 1)}
          />
        </button>
      </section>
    </>
  );
}
