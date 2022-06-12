import React from 'react';
import H3 from "../typography/H3";
import P from "../typography/P";
import NumberStepper from '../inputs/NumberStepper';

function TentOptionCard(props) {
  return (
    <> 
       <div className={`p-4 grid`}>
       {props.imageAsBackground ?
          <div className={`row-start-1 self-center justify-self-center w-full relative z-1 bg-center bg-cover bg-no-repeat`} style={{backgroundImage: "url(" + props.imagePath + ")"}}></div>
          : <img src={props.imagePath} alt="" className={`self-center justify-self-center w-full h-full mt-0 `}></img>
        }          
          <div className='flex flex-col justify-between mt-6'>
            <P>{props.description}</P>
          </div>
          <div className={`flex justify-between mt-6`}>
            <H3 classModifiers={`text-white leading-none`}>{props.price}</H3>
            <NumberStepper name="amount" initialVal={props.initialAmount? props.initialAmount : 0} updateAmount={props.updateAmount}></NumberStepper>
          </div>
       </div>

    </>
  )
}

export default TentOptionCard