import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import { useNavigate } from "react-router-dom"
import OptionCard from '../../components/optionCards/OptionCard';
import PrimaryButton from "../../components/buttons/PrimaryButton";

function TicketForm() {
  let navigate = useNavigate();
  const {shopData, setShopData } = useContext(ShopContext)
  const baseIconPath = process.env.PUBLIC_URL + "/icons/"
  const ticketOptions = [
    {
      id: 0,
      title:"Regular",
      price:"799 Kr.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
      imagePath: baseIconPath + "RegularTicketGold.svg",
      amount: 0,
    },{
      id: 1,
      title:"VIP",
      price:"1299 Kr.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
      imagePath: baseIconPath + "VIPGold.svg",
      amount: 0,
    }
  ];

  function updateAmount(id, newAmount){
    const toUpdate = ticketOptions.find((ticket) => ticket.id === id);
    if(toUpdate !== undefined){
      toUpdate.amount = newAmount;
    }
  }

  function submit(){
    setShopData((oldData) => {
      let newData = {...oldData};
      newData.tickets = ticketOptions.filter((ticket) => ticket.amount > 0);
      return newData;
    });

    navigate("../tents")
  }

  return (
    <div className='h-full lg:flex-auto flex flex-col gap-3 items-end'>
        {ticketOptions.map((ticket, index) => {
          return (<OptionCard key={ticket.id} {...ticket} updateAmount={(newAmount) => updateAmount(ticket.id, newAmount)} reversed={index % 2 === 0} imageAsBackground={false}></OptionCard>)
        })}
        <PrimaryButton caption="Confirm" action={submit}></PrimaryButton>
    </div>
  )
}

export default TicketForm