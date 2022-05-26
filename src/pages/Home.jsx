import React from 'react'
import H4 from '../components/typography/H4';
import { AllBandsContext } from '../App';

export default function Home() {
  const bandObj = React.useContext(AllBandsContext);
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "LogoText.svg"} alt="white Ragnarock logo with yellow rune"/>
      <div className='flex text-center items-center gap-6'>
        <div className='bg-white h-1 w-1/3'></div>
        <H4 classModifiers="text-white">Join us in copenhagen</H4>
      </div>

      <div className='flex text-center items-center gap-6 mt-6'>
        <div className='bg-white h-1 w-1/5'></div>
          <H4 classModifiers="text-white">August 8th - 14th 2022</H4>
      </div>

      <div className='flex'>
        <img src={process.env.PUBLIC_URL + "midgard.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full fill-white"/>
        <img src={process.env.PUBLIC_URL + "vanaheim.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full"/>
        <img src={process.env.PUBLIC_URL + "jotunheim.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full"/>
      </div>

      <figure className="grid h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={bandObj[0].logo}
            alt={`${bandObj[0].name} band logo`}
          />
      </figure> 
    </div>
  );
}