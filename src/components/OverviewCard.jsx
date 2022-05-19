import CardSticker from "./CardSticker";
import Modal from "./Modal";

import { useState } from "react";

export default function OverviewCard({ imgUrl, title, stage, runeUrl }) {
  const [modalOpen, setModalOpen] = useState(false);

  let url = imgUrl.includes("http://")
    ? imgUrl
    : `https://cphrt.herokuapp.com/logos/${imgUrl}`;

  return (
    <>
      <button className="h-full w-full" onClick={() => setModalOpen(true)}>
        <figure className="grid h-full w-full">
          <img
            className="h-full w-full object-cover row-start-0 col-start-0 row-start-1 col-start-1"
            src={url}
            alt={`${title} band logo`}
          />
          <CardSticker title={title} stage={stage} runeUrl={runeUrl} />
        </figure>
      </button>
      <Modal title={title} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}
