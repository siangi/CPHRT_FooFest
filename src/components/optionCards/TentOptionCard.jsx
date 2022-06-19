import React from 'react';
import H3 from "../typography/H3";
import NumberStepper from '../inputs/NumberStepper';

function TentOptionCard(props) {
  return (
    <> 
       <div className={`p-4 grid w-full`}>
       {props.imageAsBackground ?
          <div className={`row-start-1 self-center justify-self-center w-full relative z-1 bg-center bg-cover bg-no-repeat`} style={{backgroundImage: "url(" + props.imagePath + ")"}}></div>
          : <img src={props.imagePath} alt="" className={`self-center justify-self-center w-full h-full mt-0 `}></img>
        }

        {/* OVERLAY AND TEXT ON TOP OF IMAGE */}
        {/* <div className='relative overflow-hidden'>
          <img src={props.imagePath} alt="" className={`self-center justify-self-center w-full h-full mt-0 mix-blend-overlay`}></img>
          <div class="absolute top-0 left-0 px-6 py-4">
            <H2 classModifiers="text-white">{props.title}</H2>
          </div>
        </div> */}
        
                  
          <div className='flex flex-col justify-between mt-6'>
            <H3 classModifiers="text-white">{props.title}</H3>
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