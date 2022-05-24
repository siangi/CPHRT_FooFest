import React from "react";
import ScheduleDayCard from "../components/ScheduleDayCard";

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

  return (
    <section className="flex flex-col gap-28">
      {days.map((day) => (
        <ScheduleDayCard key={day} day={day} />
      ))}
    </section>
  );
}

export default Schedule;
