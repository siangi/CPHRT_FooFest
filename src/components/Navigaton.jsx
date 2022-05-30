import React, { useState, useEffect } from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 850);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 850);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {isDesktop ? (
        <nav className="flex justify-between px-8 py-8 items-center">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/LogoText.svg"}
              alt=""
              className="w-52 h-full row-start-1 col-start-1 col-span-4 self-center justify-self-center"
            />
          </Link>
          <div className="flex gap-12">
            <Link
              className="text-white font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow"
              to="/overview"
            >
              Line-up
            </Link>
            <Link
              className="text-white font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow"
              to="/Schedule"
            >
              Schedule
            </Link>
            <Link
              className="text-white font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow"
              to="/Favorites"
            >
              Your favorites
            </Link>
            <PrimaryButton
              caption="Get tickets"
              onClick={"/shop"}
            ></PrimaryButton>
          </div>
        </nav>
      ) : (
        <nav className="bg-darkmode_black ">
          <div
            className="space-y-2  px-8 py-8"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
          </div>

          <div className={isNavOpen ? "showBurgerMenu" : "hideBurgerMenu"}>
            <div
              className="absolute top-0 left-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="grid grid-cols-1 gap-x-6">
              <li className="m-8 font-bodyFont font-semibold text-lg tracking-wide">
                <Link to="/">Home</Link>
              </li>
              <li className="m-8 font-bodyFont font-semibold text-lg tracking-wide">
                <Link to="/shop">Buy tickets</Link>
              </li>
              <li className="m-8 font-bodyFont font-semibold text-lg tracking-wide">
                <Link to="/schedule">Schedule</Link>
              </li>
              <li className="m-8 font-bodyFont font-semibold text-lg tracking-wide">
                <Link to="/overview">Line-up</Link>
              </li>
              <li className="m-8 font-bodyFont font-semibold text-lg tracking-wide">
                <Link to="/schedule">Your favorites</Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
