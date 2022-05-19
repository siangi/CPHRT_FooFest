import React from 'react'
import OptionCard from '../../components/optionCards/OptionCard'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton';
import H3 from '../../components/typography/H3';

function TentForm() {
    let amountOfTickets = 7;
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

    function checkTentValidity(){
        let availableSpace = 0;
        tentOptions.forEach((tentOption) => {
            availableSpace += tentOption.amountOfTents * tentOption.spaceForPeople;
        });

        if (availableSpace > amountOfTickets){
            // valid form
            console.log("form valid!");
        } else {
            //invalid form
            console.log("form invalid!");
        }
    }

    function submitTentForm(event){
        event.preventDefault();
        checkTentValidity();
    }

    calculateTentSuggestion(amountOfTickets);
    
    return (
        <div className='h-full lg:flex-auto flex flex-col gap-3'>
            <H3 classModifiers="text-shade_darker_white">You have booked for {amountOfTickets} People, if you want tents, everyone has to fit.</H3>
                {tentOptions.map((tentOption, index) => {
                return (<OptionCard key={tentOption.id} {...tentOption} reversed={index % 2 === 0} imageAsBackground={true} initialAmount={tentOption.amountOfTents}></OptionCard>)
                })}
                <div className='flex flex-row gap-4'>
                    <SecondaryButton caption="Bring own Tents"></SecondaryButton>
                    <PrimaryButton caption="Confirm Selection" action={submitTentForm}></PrimaryButton>
                </div>
        </div>
  )
}

export default TentForm