import React from 'react';
import { useState } from 'react';
import CampgroundsMap from '../../components/selectionMap/CampgroundsMap';
import GreenCamping from './GreenCamping';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import H3 from "../../components/typography/H2";
import H4 from "../../components/typography/H4";

function CampgroundForm() {
    const [activeCampground, setactiveCampground] = useState("");

    const Campgrounds = [
        {
            name: "Helheim",
            freeSpaces: "220",
        },
        {
            name: "Svartheim",
            freeSpaces: "330"
        },
        {
            name: "Alfheim",
            freeSpaces: "100"
        },
        {
            name: "Nilfheim",
            freeSpaces: "225"
        },
        {
            name: "Muspelheim",
            freeSpaces: "68"
        }
    ]

    function displayFreeSpaces(NewCampgroundName){
        let newCampground = Campgrounds.filter((campground) => {
            return campground.name === NewCampgroundName
        })

        setactiveCampground(newCampground[0]);
    }

    function handleClick(campgroundName, event){
        displayFreeSpaces(campgroundName);
    }
  return (
    <div className='grid grid-col-1 md:grid-col-2 gap-4'>
        <div className='col-start-1 md:max-h-96 w-full flex flex-col md:flex-row gap-4 bg-darkmode_black2 p-8'>
            <CampgroundsMap clickFunc={handleClick}></CampgroundsMap>
            <div className='text-shade_darker_white md:w-1/3 break-words'>
                <H3>choose your Campground</H3>
                {activeCampground?
                    <>
                        <H4>{activeCampground.name}</H4>
                        <p className='font-bodyFont text-lg'>
                            free spaces: {activeCampground.freeSpaces}
                        </p>
                    </>: null
                }
                
            </div>    
        </div>
        <div className='col-start-1 md:col-start-2'>
            <GreenCamping></GreenCamping>
        </div>
        <div className='col-start-1'>
            <PrimaryButton caption="Confirm"></PrimaryButton>
        </div>       
    </div>
  )
}

export default CampgroundForm