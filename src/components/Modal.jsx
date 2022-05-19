import { BandContext } from "../pages/Overview";
import H2 from "../components/typography/H2";
import P from "../components/typography/P";
import React, { useState } from "react";

export default function Modal({ modalOpen, setModalOpen }) {
  const bandObj = React.useContext(BandContext);
  const [isReadMore, setIsReadMore] = useState(true);

  return modalOpen ? (
    <section className="fixed z-10 w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)] inset-0">
      <div className="p-10 lg:p-6 bg-darkmode_black2 text-white mx-auto my-[5%] w-[80%] grid justify-items-center lg:grid-cols-2 gap-6">
        <img src={bandObj.logo} alt={bandObj.name} className="object-cover" />

        <div className="">
          <H2>{bandObj.name}</H2>
          <P>
            {isReadMore ? bandObj.bio.slice(0, 150) : bandObj.bio}
            <span onClick={() => setIsReadMore(!isReadMore)}>
              {isReadMore ? "...read more" : " show less"}
            </span>
          </P>
          <button onClick={() => setModalOpen(false)}>close</button>
        </div>
      </div>
    </section>
  ) : null;
}
