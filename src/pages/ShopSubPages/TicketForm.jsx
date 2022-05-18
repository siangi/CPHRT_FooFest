import React from 'react';
import OptionCard from '../../components/optionCards/OptionCard';
import PrimaryButton from "../../components/buttons/PrimaryButton"

function TicketForm() {
  const baseIconPath = process.env.PUBLIC_URL + "/icons/"
  const ticketOptions = [
    {
      title:"Regular",
      price:"799 Kr.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
      imagePath: baseIconPath + "RegularTicketGold.svg",
    },{
      title:"VIP",
      price:"1199 Kr.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
      imagePath: baseIconPath + "VIPGold.svg",
    }
  ]
  return (
    <div className='h-full lg:flex-auto flex flex-col gap-3 items-end'>
        {ticketOptions.map((ticket, index) => {
          return (<OptionCard {...ticket} reversed={index % 2 === 0}></OptionCard>)
        })}
        <PrimaryButton caption="Confirm"></PrimaryButton>
    </div>
  )
}

export default TicketForm