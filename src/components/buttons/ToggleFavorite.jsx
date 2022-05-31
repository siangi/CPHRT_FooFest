import React from "react";
import Heart from "../Heart";
import HeartFull from "../HeartFull";

export default function ToggleFavorite({ setAllBands, bandObj }) {
  const changeFav = (name) => {
    setAllBands((prev) =>
      prev.map((band) => {
        if (band.name === name) {
          const newBand = { ...band, favorite: !band.favorite };
          return newBand;
        }
        return band;
      })
    );
  };

  return (
    <button
      className="flex items-center gap-4 mt-auto ml-auto px-3 py-2 bg-white text-black"
      onClick={() => changeFav(bandObj.name)}
    >
      {bandObj.favorite ? (
        <>
          Remove from favorites <HeartFull />
        </>
      ) : (
        <>
          Add to favorites <Heart />
        </>
      )}
    </button>
  );
}
