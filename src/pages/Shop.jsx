import React from 'react';
import ProgressStepsBar from '../components/progressBar/ProgressStepsBar';
import { Outlet } from 'react-router-dom';

function Shop() {
  const IconBasePath = process.env.PUBLIC_URL + "/icons/";
  const Steps = [
    {
      label: "Tickets",
      iconPath: `${IconBasePath}/VIP.svg`,
      url: "",
    },
    {
      label: "Tents",
      iconPath: `${IconBasePath}/tent.svg`,
      url: "",
    },
    {
      label: "Campground",
      iconPath: `${IconBasePath}/campfire.svg`,
      url: "",
    },
    {
      label: "Personal Info",
      iconPath: `${IconBasePath}/form.svg`,
      url: "",
    },
    {
      label: "Payment",
      iconPath: `${IconBasePath}/money.svg`,
      url: "",
    },
  ]
  return (
    <div className='bg-darkmode_black h-fit flex flex-col gap-2'>
      <ProgressStepsBar steps={Steps} activeIndex={0}></ProgressStepsBar>
      <Outlet />
    </div>
  )
}

export default Shop