import React from 'react';
import { useState } from 'react';
import CampgroundsMap from '../../components/selectionMap/CampgroundsMap';
import H2 from "../../components/typography/H2";

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
            return campground.name = NewCampgroundName
        })

        setactiveCampground(newCampground[0]);
    }

    function handleClick(campgroundName, event){
        displayFreeSpaces(campgroundName);
    }
  return (
    <div className='max-h-screen h-full flex flex-row bg-darkmode_black2'>
        <CampgroundsMap clickFunc={handleClick}></CampgroundsMap>
        <div className='text-shade_darker_white'>
            <H2>choose your Campground</H2>
            <p className='font-bodyFont text-lg'>free spaces in {activeCampground.name}, {activeCampground.freeSpaces}</p>
        </div>    
    </div>
    
  )
}

export default CampgroundForm