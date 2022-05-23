import React from 'react'
import { AllBandsContext } from "../App";


export default function Favorites() {
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