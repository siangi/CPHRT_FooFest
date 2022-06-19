import React from 'react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {StackedCarousel} from "react-stacked-carousel";
import 'react-stacked-carousel/dist/index.css';
import { ShopContext } from '../../contexts/ShopContext';
import PersonFormContainer from '../../components/PersonFormContainer';
import H2 from '../../components/typography/H2';
import H4 from '../../components/typography/H4';


function PersonalInfo() {
  const {shopData, setShopData} = useContext(ShopContext);
  const navigate = useNavigate();
  const amountOfBasic = shopData.tickets[0].amount;
  const amountOfPremium = shopData.tickets[1].amount;
  const amountOfVIP = shopData.tickets[2].amount;

  let personForms = createPersonForms();
  const previousBtnRef = React.createRef();
  const nextBtnRef = React.createRef();
  
  useEffect(() => {
    setShopData((oldData) => {
        let newData = {...oldData};
        newData.activeStep = 3;
        return newData;
    });
  }, [setShopData])

  function submitAll(){
    navigate("../basket")
  }

  function saveForm(personInfo){
    let data = shopData.persons.find((inData) => inData.id === personInfo.id);
    let isNew = data === undefined;
    if (isNew){
      setShopData((old) => {
        let newData = {...old};
        newData.persons = [...newData.persons, personInfo];
        return newData;
      })
    } else {
      setShopData((old) => {
        let newData = {...old};
        newData.persons = newData.persons.map((inArray) => {
          if(inArray.id === personInfo.id){
            return personInfo;
          }

          return inArray;
        })
        return newData;
      })
    }
  }

  function next(){
    nextBtnRef.current.click();
  }

  function previous(){
    previousBtnRef.current.click();
  }

  function createPersonForms(){
    let result = [];
    if(amountOfBasic + amountOfPremium + amountOfVIP === 1){
      result.push(
        <div key={1} className='w-full lg:w-3/4'>
          <PersonFormContainer 
              id={1}
              first={true} 
              last={true} 
              type={amountOfVIP === 1? "VIP" : "Basic"}
              title={`Ticket 1/1`} 
              next={next} 
              previous={previous}
              saveForm={saveForm}
              default={shopData.persons.find((person) => person.id === 1)}
              submitAll={submitAll}></PersonFormContainer>
        </div>
      )
    } else {
      for(let i = amountOfVIP + 1; i <= amountOfVIP + amountOfBasic; i++) {
        result.push(
          <div key={i} className='w-full lg:w-3/4'>
            <PersonFormContainer 
              id={i}
              first={i === 1} 
              last={i === amountOfBasic + amountOfPremium + amountOfVIP} 
              type="Basic"
              title={`Ticket ${i}/${amountOfBasic + amountOfPremium + amountOfVIP} (Basic)`} 
              next={next} 
              previous={previous}
              saveForm={saveForm}
              default={shopData.persons.find((person) => person.id === i)}
              submitAll={submitAll}></PersonFormContainer>
          </div>
        )
      }
      
      for(let i = 1; i <= amountOfVIP; i++) {
        result.push(
          <div key={i} className='w-full lg:w-3/4'>
            <PersonFormContainer 
              id={i}
              first={i === 1} 
              last={i === amountOfBasic + amountOfPremium + amountOfVIP} 
              type="VIP"
              title={`Ticket ${i}/${amountOfBasic + amountOfPremium + amountOfVIP} (VIP)`} 
              next={next} 
              previous={previous}
              saveForm={saveForm}
              default={shopData.persons.find((person) => person.id === i)}
              submitAll={submitAll}></PersonFormContainer>
          </div>
        )
      }
  
    

      for(let i = amountOfVIP + amountOfBasic + 1; i <= amountOfVIP + amountOfBasic + amountOfPremium; i++) {
        result.push(
          <div key={i} className='w-full lg:w-3/4'>
            <PersonFormContainer 
              id={i}
              first={i === 1} 
              last={i === amountOfBasic + amountOfPremium + amountOfVIP} 
              type="Premium"
              title={`Ticket ${i}/${amountOfBasic + amountOfPremium + amountOfVIP} (Premium)`} 
              next={next} 
              previous={previous}
              saveForm={saveForm}
              default={shopData.persons.find((person) => person.id === i)}
              submitAll={submitAll}></PersonFormContainer>
          </div>
        )
      }
    }

    return result;
  }

  return (
    <>
    <H2 classModifiers="text-5xl">Step 4:</H2>
    <H4 classModifiers="text-white">Please enter your personal information</H4>
      <div className='h-screen flex flex-col items-center'>

        <div className='w-full lg:w-3/5'>
          {
            amountOfBasic + amountOfPremium + amountOfVIP  === 1
            ?
            <div>
                {personForms}
              </div>
            :
            <StackedCarousel
            autoRotate={false}
            containerClassName="w-full h-full"
            cardClassName="flex flex-row justify-center w-full"
            leftButton={<div ref={previousBtnRef}></div>}
            rightButton={<div ref={nextBtnRef}></div>}>              
                {personForms}
              </StackedCarousel>  
          }
          
        </div>      
      </div>
    </>
  )
}

export default PersonalInfo