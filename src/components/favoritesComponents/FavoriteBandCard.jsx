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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fillRule="currentColor"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </div>

      <FavoriteCollapse
        bandObj={props.bandObj}
        isCollapseOpen={isCollapseOpen}
        setIsCollapseOpen={setIsCollapseOpen}
      ></FavoriteCollapse>
    </button>
  );
}
