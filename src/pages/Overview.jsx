import OverviewCard from "../components/OverviewCard";
import { useState, useEffect } from "react";

function Home() {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    fetch("https://cphrt.herokuapp.com/bands")
      .then((res) => res.json())
      .then((data) => {
        setBands(data);
      });
  }, []);

  function WrapperBig({ imgUrl }) {
    return (
      <div className="col-span-2 row-span-2 h-full w-full">
        <OverviewCard imgUrl={imgUrl} />
      </div>
    );
  }

  function WrapperTall({ imgUrl }) {
    return (
      <div className="row-span-2 col-span-2 sm:col-span-1 h-full w-full">
        <OverviewCard imgUrl={imgUrl} />
      </div>
    );
  }

  function WrapperSmall({ imgUrl }) {
    return <OverviewCard imgUrl={imgUrl} />;
  }

  return (
    <section className="grid gap-4 grid-cols-2 auto-rows-auto sm:grid-cols-3  md:grid-cols-4 max-w-[90%]   md:max-w-[90%]  lg:max-w-5xl xl:max-w-6xl mx-auto">
      {bands.map((band, index) =>
        index % 7 === 0 ? (
          <WrapperBig imgUrl={band.logo} />
        ) : index % 5 === 0 ? (
          <WrapperTall imgUrl={band.logo} />
        ) : (
          <WrapperSmall imgUrl={band.logo} />
        )
      )}

      {/* <WrapperBig />
      <WrapperSmall />
      <WrapperSmall />
      <WrapperSmall />
      <WrapperSmall />
      <WrapperTall />
      <WrapperBig />
      <WrapperSmall />
      <WrapperSmall /> */}
    </section>
  );
}

export default Home;
