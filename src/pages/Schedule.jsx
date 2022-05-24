import React from "react";
import OverviewCard from "../components/OverviewCard";
import { AllBandsContext } from "../App";

function Schedule() {
  const allBands = React.useContext(AllBandsContext);

  return (
    <section>
      <div className="flex gap-5">
        <div>
          <input type="radio" name="stage" id="Midgard" value="Midgard" />
          <label className="text-white" htmlFor="Midgard">
            Midgard
          </label>
        </div>

        <div>
          <input type="radio" name="stage" id="Jotunheim" value="Jotunheim" />
          <label className="text-white" htmlFor="Jotunheim">
            Jotunheim
          </label>
        </div>

        <div>
          <input type="radio" name="stage" id="Vanaheim" value="Vanaheim" />
          <label className="text-white" htmlFor="Vanaheim">
            Vanaheim
          </label>
        </div>
      </div>

      <div>
        {allBands.map((band) => (
          <OverviewCard bandObj={{ ...band }} />
        ))}
      </div>
    </section>
  );
}

export default Schedule;
