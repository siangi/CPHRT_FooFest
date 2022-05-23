import React from 'react';
import { useContext, useState } from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import { useNavigate } from "react-router-dom"
import OptionCard from '../../components/optionCards/OptionCard';
import PrimaryButton from "../../components/buttons/PrimaryButton";
import ErrorP from '../../components/typography/ErrorP';

function TicketForm() {
  let navigate = useNavigate();
  const {shopData, setShopData } = useContext(ShopContext);
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
  const [formValid, setFormValid] = useState(true);
  const [checkOnChange, setcheckOnChange] = useState(false);


  function updateAmount(id, newAmount){
    const toUpdate = ticketOptions.find((ticket) => ticket.id === id);
    if(toUpdate !== undefined){
      console.log("set amount " + newAmount + " on " + toUpdate.title)
      toUpdate.amount = newAmount;

      if(checkOnChange){
        validate();
      }
    }
  }

  function validate(){
    const totalAmountOfTickets = ticketOptions.reduce((previous, current) => {return previous + current.amount}, 0);
    setFormValid(totalAmountOfTickets > 0);
    return totalAmountOfTickets > 0;
  }

  function submit(event){
    event.preventDefault();
    setcheckOnChange(true);

    if (validate()){
      setShopData((oldData) => {
        let newData = {...oldData};
        newData.tickets = ticketOptions.filter((ticket) => ticket.amount > 0);
        return newData;
      });
  
      navigate("../tents")
    }     
  }

  return (
    <form className='h-full lg:flex-auto flex flex-col gap-3 items-end'>
        {ticketOptions.map((ticket, index) => {
          return (<OptionCard key={ticket.id} {...ticket} updateAmount={(newAmount) => updateAmount(ticket.id, newAmount)} reversed={index % 2 === 0} imageAsBackground={false}></OptionCard>)
        })}¨
        <div className='flex flex-row justify-start gap-3'>
          {formValid ? null : <ErrorP>Select at least one ticket!</ErrorP>}
          <PrimaryButton caption="Confirm" action={submit} type="submit"></PrimaryButton>          
        </div>
    </form>
  )
}

export default TicketForm