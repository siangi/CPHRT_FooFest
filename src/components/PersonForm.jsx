import React from 'react';
import BaseInput from "./inputs/BaseInput";
// import Dropdown from "./inputs/BaseInput";
import PrimaryButton from './buttons/PrimaryButton';
import PayNowButton from './buttons/PayNowButton';
import SecondaryButton from './buttons/SecondaryButton';


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
      type: props.type,
      firstname: form.current.elements["firstname"].value,
      lastname: form.current.elements["lastname"].value,
      address: form.current.elements["address"].value,
      zip: form.current.elements["zip"].value,
      city: form.current.elements["city"].value,
      country: form.current.elements["country"].value,
      email: form.current.elements["email"].value,
      countryCode: form.current.elements["countryCode"].value,
      phone: form.current.elements["phone"].value
    }
  }
  return ( 
      <form ref={form} className='' onSubmit={submit}>
        <BaseInput type="text" label="First Name" id="firstname" name="firstname" errormessage="please enter your first name" initialValue={props.default?.firstname} required={true}></BaseInput>
        <BaseInput type="text" label="Last Name" id="lastname" name="lastname" errormessage="please enter your last name" initialValue={props.default?.lastname} required={true}></BaseInput>
        <BaseInput type="text" label="Address" id="address" name="address" errormessage="please enter your address (streetname and number)" initialValue={props.default?.address} required={true}></BaseInput>
        <div className='flex flex-row gap-3' >
          <BaseInput type="tel" label="Zip Code" id="zip" name="zip" errormessage="please enter your zip-code" initialValue={props.default?.zip} pattern="(\d){1,5}" required={true}></BaseInput>
          <BaseInput type="text" label="City" id="city" name="city" errormessage="please enter your city" initialValue={props.default?.city} required={true}></BaseInput>
        </div>
        <BaseInput type="text" label="Country" id="country" name="country" errormessage="please enter your country" initialValue={props.default?.country} required={true}></BaseInput>
        <BaseInput type="email" label="E-Mail" id="email" name="email" errormessage="please enter a valid e-mail (example@example.com)" initialValue={props.default?.email} required={true}></BaseInput>
        
        <div className='flex gap-3 items-baseline'>
          {/* <Dropdown label="Country Code" id="countryCode" name="countryCode" required={true} /> */}
          <div>
            <label className="text-shade_darker_white font-bodyFont" htmlFor="countryCode">Code</label>
            <select name="countryCode" 
              id="countryCode" 
              initialValue={props.default?.countryCode} 
              required={true}
              className="bg-darkmode_black8 border-none text-shade_darker_white font-bodyFont focus:ring-accent_yellow focus:ring-2">
              <option value="45">+45</option>
              <option value="46">+46</option>
              <option value="47">+47</option>
              <option value="48">+48</option>
              <option value="00">+00</option>
            </select>
          </div>
          <BaseInput type="tel" label="Phone" id="phone" name="phone" errormessage="please enter a valid phone number" initialValue={props.default?.phone} pattern="(\+?\d*\s*)*" required={true}></BaseInput>
        </div>
        {
          props.billing?(
            <div className='flex flex-row justify-end'>
              <PayNowButton action={submit}></PayNowButton>
            </div>
          ):(
            <div className='flex flex-row justify-between mt-4 gap-4 md:justify-end'>
              {!props.first && <SecondaryButton caption="previous" action={previous}></SecondaryButton>}
              {!props.last && <PrimaryButton caption="next" action={next}></PrimaryButton>}
              {props.last && <PrimaryButton caption="submit" action={submit}></PrimaryButton>}
            </div>
          )
        }
        </form>
        )
}

export default PersonForm