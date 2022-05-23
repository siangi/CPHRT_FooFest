import React from 'react'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../contexts/ShopContext';
import OptionCard from '../../components/optionCards/OptionCard'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton';
import H3 from '../../components/typography/H3';
import ErrorP from '../../components/typography/ErrorP';

function TentForm() {
    const {shopData, setShopData} = useContext(ShopContext)
    let navigate = useNavigate();
    let amountOfTickets = shopData.tickets.reduce((previousValue, currentValue) => {return previousValue + currentValue.amount}, 0);
    const baseImagePath = process.env.PUBLIC_URL + "/images/";
    const tentOptions = [
        {
            id: 0,
            title:"3 Person Tent",
            price:"399 Kr.",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
            imagePath: baseImagePath + "3PersonTent.jpg",
            spaceForPeople: 3,
            amountOfTents: 0,
        },
        {
            id: 1,
            title:"2 Person Tent",
            price:"299 Kr.",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
            imagePath: baseImagePath + "2PersonTent.jpg",
            spaceForPeople: 2,
            amountOfTents: 0,
        }
    ];
    const [formValid, setFormValid] = useState(true);
    const [checkOnChange, setcheckOnChange] = useState(false);

    function calculateTentSuggestion(amountOfPeople){
        let leftoverPeople = amountOfPeople;
        tentOptions.sort((a, b) => {
            return a.amountOfPeople > b.amountOfPeople
        });

        tentOptions.forEach((tentOption, index) => {
            if(index < tentOptions.length - 1){
                tentOption.amountOfTents = Math.floor(leftoverPeople / tentOption.spaceForPeople);
                leftoverPeople = leftoverPeople % tentOption.spaceForPeople;
            } else {
                // if it is the smalles tent option, we have to fit everyone left.,
                tentOption.amountOfTents = Math.ceil(leftoverPeople / tentOption.spaceForPeople);
                leftoverPeople = 0;
            }            
        })
    }

    function getAmountOfSpace(){
        let availableSpace = 0;
        tentOptions.forEach((tentOption) => {
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
                newData.tents = tentOptions.filter((tentOption) => tentOption.amountOfTents > 0);
                return newData;
            });
            navigate("../campground");
        }
    }

    function updateAmount(id, newAmount){
        const toUpdate = tentOptions.find((tent) => tent.id === id);
        if(toUpdate !== undefined){
          toUpdate.amountOfTents = newAmount;
          if(checkOnChange){
              checkTentValidity();
          }
        }
    }

    calculateTentSuggestion(amountOfTickets);
    
    return (
        <form className='h-full lg:flex-auto flex flex-col gap-3'>
            <H3 classModifiers="text-shade_darker_white">You have booked for {amountOfTickets} People, if you want tents, everyone has to fit.</H3>
                {tentOptions.map((tentOption, index) => {
                return (<OptionCard 
                            key={tentOption.id} {...tentOption} 
                            reversed={index % 2 === 0} imageAsBackground={true} 
                            updateAmount={(newAmount) => updateAmount(tentOption.id, newAmount)} 
                            initialAmount={tentOption.amountOfTents}>
                        </OptionCard>)
                })}
                <div className='flex flex-row gap-4 justify-end'>
                    {formValid? null : <ErrorP>Your currently only have space for {getAmountOfSpace()} out of {amountOfTickets} People!</ErrorP>}
                    <SecondaryButton caption="Bring own Tents" action={noTents}></SecondaryButton>
                    <PrimaryButton caption="Confirm Selection" action={submitTentForm}></PrimaryButton>
                </div>
        </form>
  )
}

export default TentForm