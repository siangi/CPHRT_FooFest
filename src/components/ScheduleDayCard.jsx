import React, { useState } from "react";
import { AllBandsContext } from "../App";
import OverviewCard from "./OverviewCard";
import H2 from "./typography/H3";

export default function ScheduleDayCard({ day }) {
  const allBands = React.useContext(AllBandsContext);
  const [stageFilter, setStageFilter] = useState("Midgard");

  return (
    <article>
      <H2 classModifiers="text-white">{day}</H2>

      <div className="flex gap-5 mb-4">
        <div>
          <input
            checked={stageFilter === "Midgard" ? true : false}
            type="radio"
            name={`stage-${day}`}
            id={`Midgard-${day}`}
            value={`Midgard-${day}`}
            onChange={() => setStageFilter("Midgard")}
          />
          <label className="text-white" htmlFor={`Midgard-${day}`}>
            Midgard
          </label>
        </div>

        <div>
          <input
            checked={stageFilter === "Jotunheim" ? true : false}
            type="radio"
            name={`stage-${day}`}
            id={`Jotunheim-${day}`}
            value={`Jotunheim-${day}`}
            onChange={() => setStageFilter("Jotunheim")}
          />
          <label className="text-white" htmlFor={`Jotunheim-${day}`}>
            Jotunheim
          </label>
        </div>

        <div>
          <input
            checked={stageFilter === "Vanaheim" ? true : false}
            type="radio"
            name={`stage-${day}`}
            id={`Vanaheim-${day}`}
            value={`Vanaheim-${day}`}
            onChange={() => setStageFilter("Vanaheim")}
          />
          <label className="text-white" htmlFor={`Vanaheim-${day}`}>
            Vanaheim
          </label>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {allBands
          .filter((band) => band.day === day && band.stage === stageFilter)
          .map((band) => (
            <OverviewCard bandObj={band} />
          ))}
      </div>
    </article>
  );
}
