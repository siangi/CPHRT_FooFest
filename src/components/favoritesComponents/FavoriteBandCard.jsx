import React from "react";
import { useState } from "react";
import H4 from "../typography/H4";
import FavoriteCollapse from "./FavoriteCollapse";

export default function FavoriteBandCard(props) {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <button
      onClick={() => setIsCollapseOpen((prev) => !prev)}
      className={`${
        props.bandObj.color === "accent_red"
          ? "bg-accent_red"
          : props.bandObj.color === "accent_blue"
          ? "bg-accent_blue"
          : "bg-accent_yellow"
      } h-fit w-full grid grid-cols-6 mb-5 p-3 text-left`}
    >
      <div className="time_and_band col-start-1 align-left col-end-5 ml-0">
        <p>
          {props.bandObj.start} - {props.bandObj.end}
        </p>
        <H4>{props.bandObj.name}</H4>
      </div>

      <div className="icon flex flex-row col-end-7 col-span-2">
        <img
          src={process.env.PUBLIC_URL + props.bandObj.runeUrl}
          alt={props.bandObj.stage}
          className="h-10 w-full flex justify-center"
        />
      </div>

      <FavoriteCollapse
        bandObj={props.bandObj}
        isCollapseOpen={isCollapseOpen}
        setIsCollapseOpen={setIsCollapseOpen}
      ></FavoriteCollapse>
    </button>
  );
}
