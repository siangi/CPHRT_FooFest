import React, { useEffect } from "react";
import { BandContext } from "../../pages/Overview";
import H3 from "../typography/H3";


export default function FavoriteCollapse({ isCollapseOpen, bandObj }) {

    return isCollapseOpen ? (
      <div className="col-start-1 col-end-7">
        <div className={`${
            bandObj.color === "accent_red"
            ? "bg-accent_red"
            : bandObj.color === "accent_blue"
            ? "bg-accent_blue"
            : "bg-accent_yellow"} h-full w-full mt-2 space-y-2`}>
       
                <p><strong>Genre: </strong>{bandObj.genre}</p>
                <p><strong>Members: </strong>{bandObj.members.join(", ")}</p>
                <div className="flex justify-between">
                  <p><strong>Spotify: </strong>coming...</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fillRule="currentColor" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
                    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                    <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                    <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                  </svg>
                </div>
          </div>
      </div>
    ) : null;
  }