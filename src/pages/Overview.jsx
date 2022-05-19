import OverviewCard from "../components/OverviewCard";
import { useState, useEffect } from "react";
import axios from "axios";

function WrapperBig({ imgUrl, title, stage }) {
  return (
    <div className="col-span-2 row-span-2 h-full w-full">
      <OverviewCard imgUrl={imgUrl} title={title} stage={stage} />
    </div>
  );
}

function WrapperTall({ imgUrl, title, stage }) {
  return (
    <div className="row-span-2 col-span-2 sm:col-span-1 h-full w-full">
      <OverviewCard imgUrl={imgUrl} title={title} stage={stage} />
    </div>
  );
}

function WrapperSmall({ imgUrl, title, stage }) {
  return (
    <div className=" h-full w-full">
      <OverviewCard imgUrl={imgUrl} title={title} stage={stage} />
    </div>
  );
}

function Home() {
  const [midgardBands, setMidgardBands] = useState([]);
  const [vanaheimBands, setVanaheimBands] = useState([]);
  const [jotunheimBands, setJotunheimBands] = useState([]);

  const [allBands, setAllBands] = useState([]);

  useEffect(() => {
    const getBands = axios.get("https://cphrt.herokuapp.com/bands");
    const getStages = axios.get("https://cphrt.herokuapp.com/schedule");

    Promise.all([getBands, getStages])
      .then((allData) => {
        const allBandsData = allData[0].data;
        const allStagesData = allData[1].data;

        function makeStageData(stage) {
          return allBandsData
            .map((item) => {
              for (const day in allStagesData[stage]) {
                for (let i = 0; i < allStagesData[stage][day].length; i++) {
                  const e = allStagesData[stage][day][i];
                  let color;

                  stage === "Midgard"
                    ? (color = "accent_red")
                    : stage === "Vanaheim"
                    ? (color = "accent_blue")
                    : (color = "accent_yellow");

                  if (e.act === item.name) {
                    item = {
                      ...item,
                      start: e.start,
                      end: e.end,
                      stage: stage,
                      day: day,
                      color: color,
                    };
                  }
                }
              }

              return item;
            })
            .filter((item) => item.stage === stage);
        }

        function makeAllData() {
          let stagesArray = [];

          stagesArray = stagesArray.concat(
            makeStageData("Midgard"),
            makeStageData("Vanaheim"),
            makeStageData("Jotunheim")
          );

          setAllBands(stagesArray);
        }

        setMidgardBands(() => makeStageData("Midgard"));
        setVanaheimBands(() => makeStageData("Vanaheim"));
        setJotunheimBands(() => makeStageData("Jotunheim"));

        makeAllData();
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
          />
        ) : index % 5 === 0 ? (
          <WrapperTall
            key={band.name}
            imgUrl={band.logo}
            title={band.name}
            stage={band.stage}
          />
        ) : (
          <WrapperSmall
            key={band.name}
            imgUrl={band.logo}
            title={band.name}
            stage={band.stage}
          />
        )
      )}
    </section>
  );
}

export default Home;
