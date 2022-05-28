import React from "react";
import H2 from "../typography/H2";
import { AllBandsContext } from "../../App";
import FavoriteBandCard from "./FavoriteBandCard";

export default function FavoriteCol({ day, index, colIndex }) {
  const allBands = React.useContext(AllBandsContext);

  return (
    <article className={` flex flex-col items-center`}>
      <H2>{day}</H2>

      <div>
        {allBands
          .filter((band) => band.day === day)
          .map((band) => (
            <FavoriteBandCard bandObj={band} />
          ))}
      </div>
    </article>
  );
}
