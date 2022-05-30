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
    <div className='flex gap-5'>
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" className="self-center bi bi-star-fill " viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
      <H2 classModifiers={`text-5xl`} > Personalised schedule</H2>
    </div>
    <div className='grid grid-cols-1 gap-10 mb-10 lg:grid-cols-3'>
      <p className='text-white'>Ragnarock is the biggest rock festival in Europe - which is the equivalent of <span className='text-accent_yellow font-bold'>the line-up of your dreams</span>. This means a lot of <span className='font-bold text-accent_yellow'>bucket list concerts</span>, but also a lot of timeslots for you to remember. We want to make your life easier - so all you have to do is to enjoy!</p>
      <p className='text-white'>We are therefor allowing you to create your very own <span className='text-accent_yellow font-bold'>ride or die personalised schedule!</span> Add a star to your favorite bands, and in your very own favorites-schedule you will find all the information you need; when, where and who.</p>
      
    </div>
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
