import React from 'react'
import { Link } from "react-router-dom";
import { AllBandsContext } from '../App';
import PrimaryButton from '../components/buttons/PrimaryButton';
import SecondaryButton from '../components/buttons/SecondaryButton';
import H2 from '../components/typography/H2';

export default function Home() {
  const allBands = React.useContext(AllBandsContext);
  return ( 
    <>
      <img src={process.env.PUBLIC_URL + "LogoText.svg"} alt="white Ragnarock logo with yellow rune" className='object-none object-center mb-6 mt-24 lg:mt-12'/>
      <div className='flex my-10 lg:my-12 gap-7 md:gap-8 lg:gap-10 justify-between overflow-x-hidden'>
        <img src={process.env.PUBLIC_URL + "/runes/midgard.svg"} alt="rune symbolizing midgard" className="h-6 lg:h-10"/>
        <img src={process.env.PUBLIC_URL + "/runes/vanaheim.svg"} alt="rune symbolizing vanaheim" className="h-6 lg:h-10"/>
        <img src={process.env.PUBLIC_URL + "/runes/jotunheim.svg"} alt="rune symbolizing jotnheim" className="h-6 lg:h-10"/>
        <img src={process.env.PUBLIC_URL + "/runes/alfheim.svg"} alt="rune symbolizing alfheim" className="h-6 lg:h-10"/>
        <img src={process.env.PUBLIC_URL + "/runes/muspelheim.svg"} alt="rune symbolizing muspelheim" className="h-6 lg:h-10"/>
        <img src={process.env.PUBLIC_URL + "/runes/nilfheim.svg"} alt="rune symbolizing nilfheim" className="h-6 lg:h-10"/>
        <img src={process.env.PUBLIC_URL + "/runes/svartheim.svg"} alt="rune symbolizing svartheim" className="h-6 lg:h-10"/>
        <img src={process.env.PUBLIC_URL + "/runes/vanaheim.svg"} alt="rune symbolizing vanaheim" className="h-6 lg:h-10"/>
        <img src={process.env.PUBLIC_URL + "/runes/jotunheim.svg"} alt="rune symbolizing jotunheim" className="h-6 lg:h-10"/>
        <img src={process.env.PUBLIC_URL + "/runes/midgard.svg"} alt="rune symbolizing midgard" className="h-6 lg:h-10"/>
        <img src={process.env.PUBLIC_URL + "/runes/alfheim.svg"} alt="rune symbolizing alfheim" className="h-6 lg:h-10"/>
        <img src={process.env.PUBLIC_URL + "/runes/muspelheim.svg"} alt="rune symbolizing muspelheim" className="h-6 lg:h-10"/>
      </div>

        <img src={process.env.PUBLIC_URL + "/images/landingpage_image.png"} alt="crowd at a festival" className='opacity-80 object-cover object-center mb-4'/>
        <div className='grid grid-cols1 md:grid-cols-3 gap-4'>
          <img src={process.env.PUBLIC_URL + "/images/crowd.jpg"} alt="crowd at a festival"/>
          <img src={process.env.PUBLIC_URL + "/images/rock_music_artist2.jpg"} alt="rock music artist raising his fist"/>
          <img src={process.env.PUBLIC_URL + "/images/rock_music_artist3.jpg"} alt="rock music artist playing on stage"/>
        </div>

      <div className='flex justify-end mt-4 gap-4'>
        <Link to="/lineup"><SecondaryButton caption="See line up"></SecondaryButton></Link>
        <Link to="/shop"><PrimaryButton caption="Get your tickets now"></PrimaryButton></Link>
      </div>
    </>
  );
}