import { BandContext } from "../pages/Overview";
import React from "react";

export default function CardSticker() {
  const bandObj = React.useContext(BandContext);
  return (
    <figcaption
      className={`${
        bandObj.color === "accent_red"
          ? "bg-accent_red"
          : bandObj.color === "accent_blue"
          ? "bg-accent_blue"
          : "bg-accent_yellow"
      } drop-shadow-lg leading-7 text-lg lg:text-xl text-left row-start-0 col-start-0 row-start-1 col-start-1 self-end justify-self-start min-w-[8rem] max-w-[90%] mb-5 pl-1 pr-10 py-1.5 font-bodyFont flex`}
    >
      <img
        src={process.env.PUBLIC_URL + bandObj.runeUrl}
        alt={bandObj.stage}
        className="w-7 mb-[-0.4rem]"
      />
      {bandObj.name}
    </figcaption>
  );
}
