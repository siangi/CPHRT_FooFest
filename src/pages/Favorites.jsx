import React from 'react'
import DayWrapper from '../components/favoritesComponents/DayWrapper';
import { AllBandsContext } from '../App';
export const BandContext = React.createContext();


export default function Favorites() {
  const allBands = React.useContext(AllBandsContext);
  const Monday = allBands.filter((band) => band.favorite && band.day === "Monday");
  const Tuesday = allBands.filter((band) => band.favorite && band.day === "Tuesday");
  const Wednesday = allBands.filter((band) => band.favorite && band.day === "Wednesday");
  const Thursday = allBands.filter((band) => band.favorite && band.day === "Thursday");
  const Friday = allBands.filter((band) => band.favorite && band.day === "Friday");
  const Saturday = allBands.filter((band) => band.favorite && band.day === "Saturday");
  const Sunday = allBands.filter((band) => band.favorite && band.day === "Sunday");


  return (

    
    <div className='grid grid-cols-3 gap-10'>
        <BandContext.Provider value={Monday}>
          <DayWrapper day={"Monday"}/>
        </BandContext.Provider>

        <BandContext.Provider value={Tuesday}>
          <DayWrapper day={"Tuesday"}/>
        </BandContext.Provider>

        <BandContext.Provider value={Wednesday}>
          <DayWrapper day={"Wednesday"}/>
        </BandContext.Provider>
      </div>
  );
}
