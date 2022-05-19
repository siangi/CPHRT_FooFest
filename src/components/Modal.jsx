import { BandContext } from "../pages/Overview";
import React from "react";

export default function Modal({ modalOpen, setModalOpen }) {
  const bandObj = React.useContext(BandContext);

  return modalOpen ? (
    <section className="fixed z-10 w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)] inset-0">
      <div className="p-6 bg-darkmode_black2 text-white mx-auto my-[5%] w-[80%] flex">
        <img src={bandObj.logo} alt={bandObj.name} className="w-[40%]" />
        {bandObj.name}
        <button onClick={() => setModalOpen(false)}>close</button>
      </div>
    </section>
  ) : null;
}
