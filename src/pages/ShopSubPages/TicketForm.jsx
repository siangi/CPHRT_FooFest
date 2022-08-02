import React from "react";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import { useNavigate } from "react-router-dom";
import TicketOption from "../../components/optionCards/TicketOption";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import ErrorP from "../../components/typography/ErrorP";
import H2 from "../../components/typography/H2";

function TicketForm() {
  let navigate = useNavigate();
  const { shopData, setShopData } = useContext(ShopContext);
  const ticketOptions = shopData.tickets;
  const [formValid, setFormValid] = useState(true);
  const [checkOnChange, setcheckOnChange] = useState(false);

  function updateAmount(id, newAmount) {
    const toUpdate = ticketOptions.find((ticket) => ticket.id === id);
    if (toUpdate !== undefined) {
      toUpdate.amount = newAmount;

      if (checkOnChange) {
        validate();
      }
    }
  }

  function validate() {
    const totalAmountOfTickets = ticketOptions.reduce((previous, current) => {
      return previous + current.amount;
    }, 0);
    setFormValid(totalAmountOfTickets > 0);
    return totalAmountOfTickets > 0;
  }

  function submit(event) {
    event.preventDefault();
    setcheckOnChange(true);

    if (validate()) {
      setShopData((oldData) => {
        let newData = { ...oldData };
        newData.tickets = ticketOptions;
        return newData;
      });

      navigate("../tents");
      window.scrollTo({ top: 0 });
    }
  }

  useEffect(() => {
    setShopData((oldData) => {
      let newData = { ...oldData };
      newData.activeStep = 0;
      return newData;
    });
  }, [setShopData]);

  return (
    <>
      <H2 classModifiers='text-5xl mb-4'>Step 1:</H2>

      <form className='h-full grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-6 lg:gap-8'>
        {ticketOptions.map((ticket, index) => {
          return (
            <TicketOption
              key={ticket.id}
              {...ticket}
              price={ticket.price + " kr,-"}
              initialAmount={ticket.amount}
              updateAmount={(newAmount) => updateAmount(ticket.id, newAmount)}
              reversed={index % 2 === 0}
              imageAsBackground={false}></TicketOption>
          );
        })}
      </form>
      <div className='md:flex md:flex-row md:justify-end mt-4'>
        <div className='mr-4 md:mr-6'>
          {formValid ? null : (
            <ErrorP>Please select at least 1 ticket to continue.</ErrorP>
          )}
        </div>
        <PrimaryButton
          caption='Continue'
          action={submit}
          type='submit'></PrimaryButton>
      </div>
    </>
  );
}

export default TicketForm;
