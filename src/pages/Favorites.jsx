import React from 'react'
import DayWrapper from '../components/favoritesComponents/DayWrapper';
import { AllBandsContext } from '../App';
import H1 from '../components/typography/H1';
import H2 from '../components/typography/H2';
import { useState } from 'react';
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
export const BandContext = React.createContext();


export default function Favorites() {
  const [showThreeDays, setShowThreeDays] = useState(1);
  const allBands = React.useContext(AllBandsContext);
  const Monday = {
    dayName : "Monday", 
    array : allBands.filter((band) => band.favorite && band.day === "Monday")
  };

  const Tuesday = {
    dayName : "Tuesday", 
    array : allBands.filter((band) => band.favorite && band.day === "Tuesday")
  };

  const Wednesday = {
    dayName : "Wednesday", 
    array : allBands.filter((band) => band.favorite && band.day === "Wednesday")
  };

  const Thursday = {
    dayName : "Thursday", 
    array : allBands.filter((band) => band.favorite && band.day === "Thursday")
  };

  const Friday = {
    dayName : "Friday", 
    array : allBands.filter((band) => band.favorite && band.day === "Friday")
  };

  const Saturday = {
    dayName : "Saturday", 
    array : allBands.filter((band) => band.favorite && band.day === "Saturday")
  };

  const Sunday = {
    dayName : "Sunday", 
    array : allBands.filter((band) => band.favorite && band.day === "Sunday")
  };

  const allDays = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]

  return (
    <>
    <H1>Favorites</H1>
      <div className='grid grid-cols-[auto] text-center gap-10'>
          <button className='text-white w-fit col-start-0 col-end-1 row-start-0 row-end-1'>
            <HiOutlineArrowNarrowLeft size="2rem" />
          </button>
            {allDays.map((day, index) => (
              index >= showThreeDays - 1  && index <= showThreeDays + 1 && <H2 classModifiers={`row-start-0 row-end-1 col-start-${index+1} col-end-${index+2}`}>{day.dayName}</H2>
              ))}
          <button onClick={() => setShowThreeDays((prev) => prev + 1)} className={`text-white w-fit col-start-${showThreeDays + 3} col-end-${showThreeDays + 4} row-start-0 row-end-1`}>
              <HiOutlineArrowNarrowRight size="2rem"  />
          </button>

            {allDays.map((day, index) => (
            index >= showThreeDays - 1  && index <= showThreeDays + 1  && <DayWrapper array={day.array} index={index} />
              ))}
      </div>
    </>
  );
}
