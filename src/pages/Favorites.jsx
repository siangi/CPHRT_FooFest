import { AllBandsContext } from "../App";
import React from "react";

function Favorites() {
  const allBands = React.useContext(AllBandsContext);

  return (
    <div>
      {allBands
        .filter((band) => band.favorite)
        .map((band) => (
          <p className="text-white">{band.name}</p>
        ))}
    </div>
  );
}

export default Favorites;
