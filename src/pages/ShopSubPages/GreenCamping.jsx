import React from 'react';
import SoleCard from '../../components/optionCards/SoleCard';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';

function GreenCamping() {
    const greenCampingOption = {
        title: "Green Camping",
        price: "249 Kr.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
        imagePath: process.env.PUBLIC_URL + "/icons/leafGold.svg"
    } 
  return (
    <div className='flex flex-col gap-4 mb-8'>
        <SoleCard {...greenCampingOption}></SoleCard>
        <div className='flex flex-row gap-4'>
            <SecondaryButton caption="normal Camping"></SecondaryButton>
            <PrimaryButton caption="Add green Camping"></PrimaryButton>            
        </div>
    </div>
  )
}

export default GreenCamping