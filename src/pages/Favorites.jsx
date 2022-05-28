import React from "react";
import { AllBandsContext } from "../App";
import H1 from "../components/typography/H1";
import FavoriteCol from "../components/favoritesComponents/FavoriteCol";

export const BandContext = React.createContext();

export default function Favorites() {
  const allBands = React.useContext(AllBandsContext);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    // "Thursday",
    // "Friday",
    // "Saturday",
    // "Sunday",
  ];

  return (
    <>
      <H1>Favorites</H1>

      <section className="flex justify-between">
        {days.map((day) => (
          <FavoriteCol day={day} />
        ))}
      </section>
    </>
  );
}
