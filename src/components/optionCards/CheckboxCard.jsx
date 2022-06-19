import React from 'react';
import CheckBox from '../../components/inputs/CheckBox';
import H4 from "../typography/H4";
import H3 from "../typography/H3";
import P from "../typography/P";

// a card that uses all space available
function CheckboxCard(props) {
  return (
    <div className='grid grid-cols-1 grid-rows-1 p-8 border border-accent_yellow'>
      <div className={`h-fit w-full`}>
        <H4 classModifiers="text-white">Do you want to be a part of the green change?</H4>
        <div className='grid grid-cols-2 grid-rows-2'>
          <H3 classModifiers="text-white leading-none mb-3 col-start-1 row-start-2">{props.price}</H3>
          <img src={props.imagePath} alt="leaf symbolizing the green camping option" className={`col-start-2 row-start-1 row-end-2 w-12 h-12 justify-self-end`}></img>
        </div>
        
        <P classModifiers="mb-4">{props.description}</P>
        <CheckBox onChange={props.setValue} value={props.value} labelText="Add green camping" name="main" id="main"></CheckBox>
      </div>
    </div>
  )
}

export default CheckboxCard