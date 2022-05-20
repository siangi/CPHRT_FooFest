import CardSticker from "./CardSticker";
import Modal from "./Modal";

import { useState } from "react";

export default function OverviewCard({ imgUrl, title, stage, runeUrl }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <button className="h-full w-full" onClick={() => setModalOpen(true)}>
        <figure className="grid h-full w-full">
          {loaded ? null : (
            <div className="h-full bg-cyan-400 w-full object-cover  row-start-1 col-start-1" />
          )}
          <img
            style={loaded ? {} : { display: "none" }}
            className="h-full w-full object-cover row-start-1 col-start-1"
            src={imgUrl}
            onLoad={() => setLoaded(true)}
            alt={`${title} band logo`}
          />
          <CardSticker />
        </figure>
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}
