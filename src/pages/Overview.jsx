import OverviewCard from "../components/OverviewCard";
import { useState, useEffect } from "react";
import axios from "axios";

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

function Home() {
  const [allBands, setAllBands] = useState([]);

  useEffect(() => {
    const getBands = axios.get("https://cphrt.herokuapp.com/bands");
    const getStages = axios.get("https://cphrt.herokuapp.com/schedule");

    Promise.all([getBands, getStages])
      .then((allData) => {
        const allBandsData = allData[0].data;
        const allStagesData = allData[1].data;

        function makeStageData() {
          return allBandsData.map((item) => {
            for (const stage in allStagesData) {
              for (const day in allStagesData[stage]) {
                for (let i = 0; i < allStagesData[stage][day].length; i++) {
                  const e = allStagesData[stage][day][i];
                  let color;
                  let runeUrl;

                  if (stage === "Midgard") {
                    color = "accent_red";
                    runeUrl = "midgard.svg";
                  } else if (stage === "Vanaheim") {
                    color = "accent_blue";
                    runeUrl = "vanaheim.svg";
                  } else {
                    color = "accent_yellow";
                    runeUrl = "jotunheim.svg";
                  }

                  if (e.act === item.name) {
                    item = {
                      ...item,
                      start: e.start,
                      end: e.end,
                      stage: stage,
                      day: day,
                      color: color,
                      runeUrl: runeUrl,
                      favorite: false,
                    };
                  }
                }
              }
            }

            return item;
          });
        }

        setAllBands(() => makeStageData());
      })
      .catch((errors) => {
        console.error(errors);
      });
  }, []);

  return (
    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 auto-rows-auto  md:grid-cols-4 max-w-[90%]   md:max-w-[90%]  lg:max-w-5xl xl:max-w-6xl mx-auto">
      {allBands.map((band, index) =>
        index % 7 === 0 ? (
          <WrapperBig
            key={band.name}
            imgUrl={band.logo}
            title={band.name}
            stage={band.stage}
            runeUrl={band.runeUrl}
          />
        ) : index % 5 === 0 ? (
          <WrapperTall
            key={band.name}
            imgUrl={band.logo}
            title={band.name}
            stage={band.stage}
            runeUrl={band.runeUrl}
          />
        ) : (
          <WrapperSmall
            key={band.name}
            imgUrl={band.logo}
            title={band.name}
            stage={band.stage}
            runeUrl={band.runeUrl}
          />
        )
      )}
    </section>
  );
}

export default Home;
