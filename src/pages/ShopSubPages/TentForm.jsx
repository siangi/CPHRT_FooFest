import React from 'react'
import OptionCard from '../../components/optionCards/OptionCard'
import PrimaryButton from '../../components/buttons/PrimaryButton'

function TentForm() {
    const baseImagePath = process.env.PUBLIC_URL + "/images/";
    const tentOptions = [
        {
            title:"3 Person Tent",
            price:"399 Kr.",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
            imagePath: baseImagePath + "3PersonTent.jpg",
        },
        {
            title:"2 Person Tent",
            price:"299 Kr.",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
            imagePath: baseImagePath + "2PersonTent.jpg",
        }
    ]
    return (
        <div className='h-full lg:flex-auto flex flex-col gap-3 items-end'>
            {tentOptions.map((ticket, index) => {
            return (<OptionCard {...ticket} reversed={index % 2 === 0} imageAsBackground={true}></OptionCard>)
            })}
            <PrimaryButton caption="Confirm"></PrimaryButton>
        </div>
  )
}

export default TentForm