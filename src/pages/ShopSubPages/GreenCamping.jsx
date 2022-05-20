import React from 'react';
import CheckboxCard from '../../components/optionCards/CheckboxCard';


function GreenCamping() {
    const greenCampingOption = {
        title: "Green Camping",
        price: "249 Kr.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
        labelText: "add green Camping",
        imagePath: process.env.PUBLIC_URL + "/icons/leaf.svg"
    } 
  return (
    <div className='flex flex-col gap-4 mb-8'>
        <CheckboxCard {...greenCampingOption}></CheckboxCard>
    </div>
  )
}

export default GreenCamping