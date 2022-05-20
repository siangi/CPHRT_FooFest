import { AllBandsContext } from "../App";
import OverviewCard from "../components/OverviewCard";
import React, { useState } from "react";

function WrapperBig({ imgUrl, title, stage, runeUrl }) {
  return (
    <div className="col-span-1 row-span-1 sm:col-span-2 sm:row-span-2  h-full w-full">
      <OverviewCard
        imgUrl={imgUrl}
        title={title}
        stage={stage}
        runeUrl={runeUrl}
      />
    </div>
  );
}

function WrapperTall({ imgUrl, title, stage, runeUrl }) {
  return (
    <div className="row-span-1 col-span-1 sm:row-span-2 h-full w-full">
      <OverviewCard
        imgUrl={imgUrl}
        title={title}
        stage={stage}
        runeUrl={runeUrl}
      />
    </div>
  );
}

function WrapperSmall({ imgUrl, title, stage, runeUrl }) {
  return (
    <div className=" h-full w-full">
      <OverviewCard
        imgUrl={imgUrl}
        title={title}
        stage={stage}
        runeUrl={runeUrl}
      />
    </div>
  );
}

export const BandContext = React.createContext();

function Overview() {
  const allBands = React.useContext(AllBandsContext);

  const [filter, setFilter] = useState("all");

  return (
    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 auto-rows-auto  md:grid-cols-4 max-w-[90%]   md:max-w-[90%]  lg:max-w-5xl xl:max-w-6xl mx-auto">
      {allBands
        .filter((band) =>
          filter === "all"
            ? band.stage
            : filter === "favorite"
            ? band.favorite
            : band.stage === filter
        )
        .map((band, index) => (
          <BandContext.Provider key={index} value={{ ...band }}>
            {index % 7 === 0 ? (
              <WrapperBig
                imgUrl={band.logo}
                title={band.name}
                stage={band.stage}
                runeUrl={band.runeUrl}
              />
            ) : index % 5 === 0 ? (
              <WrapperTall
                imgUrl={band.logo}
                title={band.name}
                stage={band.stage}
                runeUrl={band.runeUrl}
              />
            ) : (
              <WrapperSmall
                imgUrl={band.logo}
                title={band.name}
                stage={band.stage}
                runeUrl={band.runeUrl}
              />
            )}
          </BandContext.Provider>
        ))}

      <button onClick={() => setFilter("favorite")}>FAVORITES</button>
    </section>
  );
}

export default Overview;
