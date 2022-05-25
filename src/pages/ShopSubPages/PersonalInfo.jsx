import React from 'react';
import {StackedCarousel} from "react-stacked-carousel";
import 'react-stacked-carousel/dist/index.css';
import PersonForm from '../../components/PersonForm';
import PrimaryButton from "../../components/buttons/PrimaryButton";

function PersonalInfo() {
  const amountOfVIP = 2;
  const amountOfRegular = 1;
  let personForms = createPersonForms();
  const previousBtnRef = React.createRef();
  const nextBtnRef = React.createRef();

  function next(){
    nextBtnRef.current.click();
  }

  function previous(){
    previousBtnRef.current.click();
  }

  function createPersonForms(){
    let result = [];
    for(let i = 1; i <= amountOfVIP; i++){
      result.push(
        <div key={i} className='w-full lg:w-3/4'>
          <PersonForm first={i === 1} last={i === amountOfVIP + amountOfRegular} title={`Ticket ${i}/${amountOfRegular + amountOfVIP} (VIP)`} next={next} previous={previous}></PersonForm>
        </div>
      )
    }

    for(let i = amountOfVIP + 1; i <= amountOfVIP + amountOfRegular; i++){
      result.push(
        <div key={i} className='w-full lg:w-3/4'>
          <PersonForm first={i === 1} last={i === amountOfVIP + amountOfRegular} title={`Ticket ${i}/${amountOfRegular + amountOfVIP} (Regular)`} next={next} previous={previous}></PersonForm>
        </div>
      )
    }

    return result;
  }

  return (
    <div className='h-screen flex flex-col items-center'>
      <div className='w-full lg:w-2/3 '>
        <StackedCarousel
          autoRotate={false}
          containerClassName="w-full h-full"
          cardClassName="flex flex-row justify-center w-full"
          leftButton={<div ref={previousBtnRef}></div>}
          rightButton={<div ref={nextBtnRef}></div>}>
            
            {personForms}
        </StackedCarousel>  
      </div>
      <div className='justify-self-end'>
        <PrimaryButton caption="Submit Info"></PrimaryButton>
      </div>
      
    </div>
  )
}

export default PersonalInfo