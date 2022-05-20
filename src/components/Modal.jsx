import { BandContext } from "../pages/Overview";
import { SetAllBandsContext } from "../App";
import H2 from "../components/typography/H2";
import H4 from "../components/typography/H4";
import P from "../components/typography/P";
import React, { useState, useRef, useEffect } from "react";

function useOutsideAlerter(ref, setModalOpen) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModalOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setModalOpen]);
}

export default function Modal({ modalOpen, setModalOpen }) {
  const bandObj = React.useContext(BandContext);
  const setAllBands = React.useContext(SetAllBandsContext);

  const [isReadMore, setIsReadMore] = useState(true);
  const modal = useRef(null);

  useOutsideAlerter(modal, setModalOpen);

  const changeFav = (name) => {
    setAllBands((prev) =>
      prev.map((band) => {
        if (band.name === name) {
          const newBand = { ...band };
          newBand.favorite = !newBand.favorite;
          return newBand;
        }
        return band;
      })
    );
  };

  return modalOpen ? (
    <section className="fixed z-10 w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)] inset-0">
      <div
        ref={modal}
        className="p-10 lg:p-6 bg-darkmode_black2 text-white mx-auto my-[5%] w-[80%] grid lg:grid-cols-2 gap-6 animate-fade-in"
      >
        <img
          src={bandObj.logo}
          alt={bandObj.name}
          className="object-cover justify-self-center w-full"
        />

        <div className="">
          <H2>
            {bandObj.name} {bandObj.favorite ? "true" : "false"}
          </H2>
          <H4>
            Stage:
            <span className={`text-${bandObj.color}`}> {bandObj.stage}</span>
          </H4>
          <H4>
            Time: {bandObj.day}, {bandObj.start} - {bandObj.end}
          </H4>
          <P>
            {isReadMore
              ? bandObj.bio.slice(
                  0,
                  bandObj.bio.indexOf(".", bandObj.bio.indexOf(".") + 2)
                )
              : bandObj.bio}
            {bandObj.bio.split(".").length > 3 ? (
              <span
                className="cursor-pointer"
                onClick={() => setIsReadMore(!isReadMore)}
              >
                {isReadMore ? " ...read more" : " show less"}
              </span>
            ) : null}
          </P>
          <button onClick={() => setModalOpen(false)}>close</button>

          <button onClick={() => changeFav(bandObj.name)}>
            Add to favorites
          </button>
        </div>
      </div>
    </section>
  ) : null;
}
