import { useState } from "react";
import ScheduleDayCard from "../components/ScheduleDayCard";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

function Schedule() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <section className="flex flex-col lg:gap-28">
      <div className="flex justify-between lg:hidden mb-16">
        <button
          className={`${cardIndex === 0 && "invisible"} text-white`}
          onClick={() => setCardIndex((prev) => prev - 1)}
          disabled={cardIndex === 0 && true}
        >
          <HiOutlineArrowNarrowLeft size="2rem" />
        </button>

        <h2 className="text-white font-displayFont text-[2.5rem] sm:text-[3rem] md:text-[4rem]">
          {days[cardIndex]}
        </h2>

        <button
          className={`${cardIndex === 6 && "invisible"} text-white`}
          onClick={() => setCardIndex((prev) => prev + 1)}
          disabled={cardIndex === 6 && true}
        >
          <HiOutlineArrowNarrowRight size="2rem" />
        </button>
      </div>

      {days.map((day, index) => (
        <ScheduleDayCard
          key={index}
          day={day}
          index={index}
          cardIndex={cardIndex}
        />
      ))}
    </section>
  );
}

export default Schedule;
