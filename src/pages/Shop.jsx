import React from 'react';
import ProgressStepsBar from '../components/progressBar/ProgressStepsBar';

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
    <div className='bg-darkmode_black h-full'>
      <ProgressStepsBar steps={Steps} activeIndex={0}></ProgressStepsBar>
    </div>
  )
}

export default Shop