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

      <div className="flex">
        <div className="flex flex-col justify-evenly">
          <input
            className="hidden peer"
            checked={stageFilter === "Midgard" ? true : false}
            type="radio"
            name={`stage-${day}`}
            id={`Midgard-${day}`}
            value={`Midgard-${day}`}
            onChange={() => setStageFilter("Midgard")}
          />
          <label
            className={`cursor-pointer bg-darkmode_black2 p-2 ${
              stageFilter === "Midgard" &&
              "border-2 border-accent_red border-r-0"
            } `}
            htmlFor={`Midgard-${day}`}
          >
            <img
              src={process.env.PUBLIC_URL + "midgard.svg"}
              alt="Midgard stage"
              className="w-20 mb-[-0.8rem] svg-accent_red"
            />
          </label>

          <input
            className="hidden peer"
            checked={stageFilter === "Jotunheim" ? true : false}
            type="radio"
            name={`stage-${day}`}
            id={`Jotunheim-${day}`}
            value={`Jotunheim-${day}`}
            onChange={() => setStageFilter("Jotunheim")}
          />
          <label
            className={`cursor-pointer bg-darkmode_black2 p-2 ${
              stageFilter === "Jotunheim" &&
              "border-2 border-accent_yellow border-r-0"
            } `}
            htmlFor={`Jotunheim-${day}`}
          >
            <img
              src={process.env.PUBLIC_URL + "jotunheim.svg"}
              alt="Midgard stage"
              className="w-20 mb-[-0.7rem] svg-accent_yellow"
            />
          </label>

          <input
            className="hidden peer"
            checked={stageFilter === "Vanaheim" ? true : false}
            type="radio"
            name={`stage-${day}`}
            id={`Vanaheim-${day}`}
            value={`Vanaheim-${day}`}
            onChange={() => setStageFilter("Vanaheim")}
          />
          <label
            className={`cursor-pointer bg-darkmode_black2 p-2 ${
              stageFilter === "Vanaheim" &&
              "border-2 border-accent_blue border-r-0"
            } `}
            htmlFor={`Vanaheim-${day}`}
          >
            <img
              src={process.env.PUBLIC_URL + "vanaheim.svg"}
              alt="Vanaheim stage"
              className="w-20 mb-[-0.6rem] svg-accent_blue"
            />
          </label>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full">
          {allBands
            .filter((band) => band.day === day && band.stage === stageFilter)
            .map((band) => (
              <div className="h-60">
                <OverviewCard bandObj={band} />
              </div>
            ))}
        </div>
      </div>
    </article>
  );
}
