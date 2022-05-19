import { Link } from "react-router-dom";
import { useState } from "react";

export default function BurgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="bg-darkmode_black">
      <div
        className="space-y-2 absolute top-0 left-0 px-8 py-8"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="block h-0.5 w-8  bg-white"></span>
        <span className="block h-0.5 w-8  bg-white"></span>
        <span className="block h-0.5 w-8  bg-white"></span>
      </div>

      <div className={isNavOpen ? "showBurgerMenu" : "hideBurgerMenu"}>
        <div className="burgermenu flex bg-white text-black h-12 justify-start items-center m-0 p-0  "></div>
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

        <ul className="hide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6">
          <li className="m-8 uppercase font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow hover:underline underline-offset-8">
            <Link to="/">Home</Link>
          </li>
          <li className="m-8 uppercase font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow hover:underline underline-offset-8">
            <Link to="/shop">Buy tickets</Link>
          </li>
          <li className="m-8 uppercase font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow hover:underline underline-offset-8">
            <Link to="/schedule">Full line-up</Link>
          </li>
          <li className="m-8 uppercase font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow hover:underline underline-offset-8">
            <Link to="/schedule">Day by day schedule</Link>
          </li>
          {/* <li className="m-8  uppercase font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow hover:underline underline-offset-8"><Link to="/favorites">Your favorites</Link></li> */}
          <li className="m-8 uppercase font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow hover:underline underline-offset-8">
            FAQ
          </li>
          <li className="m-8 uppercase font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow hover:underline underline-offset-8">
            Contact & press
          </li>
        </ul>
      </div>
    </nav>
  );
}
