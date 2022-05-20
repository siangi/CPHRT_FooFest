import { AllBandsContext } from "../App";
import OverviewCard from "../components/OverviewCard";
import React, { useState, useRef } from "react";

function WrapperBig({ imgUrl, title, stage, runeUrl }) {
  return (
    <div className="col-span-1 row-span-1 sm:col-span-2 sm:row-span-2  h-full w-full flex flex-col gap-3">
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
    <div className="row-span-1 col-span-1 sm:row-span-2 h-full w-full flex flex-col gap-3">
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
    <div className="h-full w-full flex flex-col gap-3">
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
  const [stageFilter, setStageFilter] = useState("all");
  const [genreFilter, setGenreFilter] = useState("all");

  const stageFilterSelect = useRef(null);
  const genreFilterSelect = useRef(null);

  return (
    <>
      <section className="max-w-[90%]   md:max-w-[90%]  lg:max-w-5xl xl:max-w-6xl mx-auto">
        <select
          name="stage-filter"
          ref={stageFilterSelect}
          onChange={() => {
            setStageFilter(stageFilterSelect.current.value);
          }}
        >
          <option value="all">All stages</option>
          <option value="Vanaheim">Vanaheim</option>
          <option value="Jotunheim">Jotunheim</option>
          <option value="Midgard">Midgard</option>
        </select>

        <select
          name="genre-filter"
          ref={genreFilterSelect}
          onChange={() => {
            setGenreFilter(genreFilterSelect.current.value);
          }}
        >
          <option value="all">All genres</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="Pop">Pop</option>
        </select>
      </section>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 auto-rows-auto  md:grid-cols-4 max-w-[90%]   md:max-w-[90%]  lg:max-w-5xl xl:max-w-6xl mx-auto">
        {allBands
          .filter((band) =>
            stageFilter === "all" ? band.stage : band.stage === stageFilter
          )
          .filter((band) =>
            genreFilter === "all" ? band.genre : band.genre === genreFilter
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
      </section>
    </>
  );
}

export default Overview;
