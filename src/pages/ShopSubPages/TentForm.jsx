import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../contexts/ShopContext';
import TentOptionCard from '../../components/optionCards/TentOptionCard'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton';
import P from '../../components/typography/P';
import H2 from '../../components/typography/H2';
import H4 from '../../components/typography/H4';
import ErrorP from '../../components/typography/ErrorP';

function TentForm() {
    const {shopData, setShopData} = useContext(ShopContext);
    let navigate = useNavigate();
    let amountOfTickets = shopData.tickets.reduce((previousValue, currentValue) => {return previousValue + currentValue.amount}, 0);
    const suggestedTents = shopData.tents;
    const [formValid, setFormValid] = useState(true);
    const [checkOnChange, setcheckOnChange] = useState(false);
    
    console.log(suggestedTents)
    useEffect(() => {
        setShopData((oldData) => {
            let newData = {...oldData};
            newData.activeStep = 1;
            return newData;
        });
    }, [setShopData]);
    

    // function calculateTentSuggestion(amountOfPeople){
    //     let leftoverPeople = amountOfPeople;
    //     suggestedTents.sort((a, b) => {
    //         return a.amountOfPeople > b.amountOfPeople
    //     });

    //     suggestedTents.forEach((tentOption, index) => {
    //         if(index < suggestedTents.length - 1){
    //             tentOption.amountOfTents = Math.floor(leftoverPeople / tentOption.spaceForPeople);
    //             leftoverPeople = leftoverPeople % tentOption.spaceForPeople;
    //         } else {
    //             // if it is the smallest tent option, we have to fit everyone left.,
    //             tentOption.amountOfTents = Math.ceil(leftoverPeople / tentOption.spaceForPeople);
    //             leftoverPeople = 0;
    //         }            
    //     })
    // }

    function getAmountOfSpace(){
        let availableSpace = 0;
        suggestedTents.forEach((tentOption) => {
            availableSpace += tentOption.amountOfTents * tentOption.spaceForPeople;
        });
        return availableSpace;
    }

    function checkTentValidity(){
        let isValid = getAmountOfSpace() >= amountOfTickets
        setFormValid(isValid);
        return isValid;
    }

    function noTents(){
        setShopData((oldData) => {
            let newData = {...oldData};
            newData.tents = [];
            return newData;
        })
        navigate("../campground");
    }

    function submitTentForm(event){
        event.preventDefault();
        setcheckOnChange(true);
        if(checkTentValidity()){
            setShopData((oldData) => {
                let newData = {...oldData};
                newData.tents = suggestedTents;
                return newData;
            });
            navigate("../campground");
        }
    }

    function updateAmount(id, newAmount){
        const toUpdate = suggestedTents.find((tent) => tent.id === id);
        if(toUpdate !== undefined){
          toUpdate.amountOfTents = newAmount;
          if(checkOnChange){
              checkTentValidity();
          }
        }
    }
    // calculateTentSuggestion(amountOfTickets);
    
    return (
        <>
        <H2 classModifiers="text-5xl">Step 2:</H2>
        <form className='h-full lg:flex-auto flex flex-col gap-3'>
            <div className='border border-white p-6'>
                <H4 classModifiers="text-shade_darker_white font-bold mb-4">You have booked tickets for <span className='text-accent_yellow'>{amountOfTickets} {amountOfTickets > 1 ? "people" : "person"}</span>.</H4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'>
                    <P>At Ragnarock it is mandatory that all festival-participants have a designated sleeping-spot in a tent. If you choose to rent a tent, it will be fully set up when you arrive - marked and reserved in your name.</P>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {suggestedTents.map((tentOption, index) => { 
                    return (<TentOptionCard
                        key={tentOption.id} 
                        {...tentOption} 
                        price={tentOption.price + " kr,-"}
                        // reversed={index % 2 === 0} imageAsBackground={true} 
                        updateAmount={(newAmount) => updateAmount(tentOption.id, newAmount)} 
                        initialAmount={tentOption.amountOfTents}>
                        </TentOptionCard>)
                })}
            </div>
                <div className='flex flex-col gap-4 justify-end mt-4'>
                    {formValid? null : <ErrorP>Please select a tent option where all {amountOfTickets} festival-participants fit.</ErrorP>}
                    <div className='flex justify-end gap-4'>
                        <SecondaryButton caption="Bring own Tents" action={noTents}></SecondaryButton>
                        <PrimaryButton caption="Confirm Selection" action={submitTentForm}></PrimaryButton>
                    </div>
                </div> 
        </form>
        </>
  )
}

export default TentForm