import React from 'react'
import H4 from '../components/typography/H4';
import { AllBandsContext } from '../App';

export default function Home() {
  const bandObj = React.useContext(AllBandsContext);
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "LogoText.svg"} alt="white Ragnarock logo with yellow rune"/>
      <div className='flex text-center items-center gap-6 mt-12'>
        <div className='bg-white h-1 w-1/3'></div>
        <H4 classModifiers="text-white">Join us in Copenhagen</H4>
      </div>

      <div className='flex text-center items-center gap-6 my-12'>
        <div className='bg-white h-1 w-1/5'></div>
          <H4 classModifiers="text-white">August 8th - 14th 2022</H4>
      </div>

      <div className='flex my-20'>
        <img src={process.env.PUBLIC_URL + "midgard.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
        <img src={process.env.PUBLIC_URL + "vanaheim.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
        <img src={process.env.PUBLIC_URL + "jotunheim.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
        <img src={process.env.PUBLIC_URL + "midgard.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
        <img src={process.env.PUBLIC_URL + "vanaheim.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
        <img src={process.env.PUBLIC_URL + "jotunheim.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
        <img src={process.env.PUBLIC_URL + "midgard.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
        <img src={process.env.PUBLIC_URL + "vanaheim.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
        <img src={process.env.PUBLIC_URL + "jotunheim.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
        <img src={process.env.PUBLIC_URL + "midgard.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
        <img src={process.env.PUBLIC_URL + "vanaheim.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
        <img src={process.env.PUBLIC_URL + "jotunheim.svg"} alt="white Ragnarock logo with yellow rune" className="h-15 w-full svg-accent_yellow"/>
      </div>

      {/* <div className="h-full w-full grid grid-cols-3 gap-5 my-5">
          <img
           className="h-full w-full object-cover"
            src={bandObj[2].logo}
            alt={`${bandObj[2].name} band logo`}
          />
          <img
           className="h-full w-full object-cover"
            src={bandObj[13].logo}
            alt={`${bandObj[13].name} band logo`}
          />
          <img
           className="h-full w-full object-cover"
            src={bandObj[11].logo}
            alt={`${bandObj[11].name} band logo`}
          />
      </div> */}

      {/* <div className="h-full w-full grid grid-cols-2 gap-5">
          <img
           className="h-full w-full object-cover"
            src={bandObj[10].logo}
            alt={`${bandObj[10].name} band logo`}
          />
          <img
           className="h-full w-full object-cover"
            src={bandObj[9].logo}
            alt={`${bandObj[9].name} band logo`}
          />
      </div> */}
    </div>
  );
}