import React from 'react';
import BaseInput from "./inputs/BaseInput";
import P from "./typography/P";
import PrimaryButton from './buttons/PrimaryButton';
import PayNowButton from './buttons/PayNowButton';

function PersonForm(props) {
  const form = React.createRef();
  function previous(event){
    event.preventDefault();
    props.previous();    
  }
  function next(event){
    event.preventDefault();
    if(form.current.reportValidity()){
      props.saveForm(createObjectFromForm());
      props.next();
    }    
  }

  function submit(event){
    event.preventDefault();
    if(form.current.reportValidity()){
      props.saveForm(createObjectFromForm());
      props.submitAll();
    }
  }

  function createObjectFromForm(){
    return {
      id: props.id,
      firstname: form.current.elements["firstname"].value,
      lastname: form.current.elements["lastname"].value,
      address: form.current.elements["address"].value,
      zip: form.current.elements["zip"].value,
      city: form.current.elements["city"].value,
      email: form.current.elements["email"].value,
      phone: form.current.elements["phone"].value
    }
  }
  return (
      <form ref={form} className=' p-2 lg:p-4' onSubmit={submit}>
        <BaseInput label="First Name" id="firstname" name="firstname" errormessage="please enter a first name" required={true}></BaseInput>
        <BaseInput label="Last Name" id="lastname" name="lastname" errormessage="please enter a last name" required={true}></BaseInput>
        <BaseInput label="Address" id="address" name="address" errormessage="please enter address (street and number)" required={true}></BaseInput>
        <div className='flex flex-row gap-3' >
          <BaseInput label="Zip Code" id="zip" name="zip" errormessage="please enter a Zip-Code"required={true}></BaseInput>
          <BaseInput label="City" id="city" name="city" errormessage="please enter a City" required={true}></BaseInput>
        </div>
        <BaseInput label="E-Mail" id="email" name="email" type="email" errormessage="please enter a valid e-mail (example@example.com)" required={true}></BaseInput>
        <BaseInput label="Phone" id="phone" name="phone" errormessage="please enter a valid phone number" required={true}></BaseInput>
        {
          props.billing?(
            <div className='flex flex-row justify-start'>
              <PayNowButton action={submit}></PayNowButton>
            </div>
          ):(
            <div className='flex flex-row justify-between'>
              {!props.first && <PrimaryButton caption="previous" action={previous}></PrimaryButton>}
              {!props.last && <PrimaryButton caption="next" action={next}></PrimaryButton>}
              {props.last && <PrimaryButton caption="submit" action={submit}></PrimaryButton>}
            </div>
          )
        }
        
      </form>
  )
}

export default PersonForm