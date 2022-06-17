import React from "react";
import H3 from "../typography/H3";
import P from "../typography/P";
import NumberStepper from '../inputs/NumberStepper';

export default function TicketOption(props) {
  return (
    <> 
       <div className={`${props.title === "Premium" ? "border-accent_yellow ": "border-white my-6 "} border p-6 lg:p-8 grid`}>
       {props.imageAsBackground ?
          <div className={`row-start-1 self-center justify-self-center w-full relative z-1 bg-center bg-cover bg-no-repeat`} style={{backgroundImage: "url(" + props.imagePath + ")"}}></div>
          : <img src={props.imagePath} alt="" className={`self-center justify-self-center w-full h-full mt-0 `}></img>
        }          
          
          <div className='flex flex-col justify-between mt-2'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg>
              <P classModifiers={`${props.title === "Premium" ? "text-accent_yellow " : "text-white"} leading-none`}>{props.description}</P>
            </div>
            <P classModifiers={`${props.title === "Premium" ? "text-accent_yellow " : "text-white"}`}>{props.description2}</P>
            <P classModifiers={`${props.title === "Premium" ? "text-accent_yellow " : "text-white"}`}>{props.description3}</P>
            <P classModifiers={`${props.title === "Premium" ? "text-accent_yellow " : "text-white"}`}>{props.description4}</P>
          </div>
          <div className={`flex justify-between mt-6`}>
            <H3 classModifiers={`${props.title === "Premium" ? "text-accent_yellow " : "text-white"} leading-none`}>{props.price}</H3>
            <NumberStepper name="amount" initialVal={props.initialAmount? props.initialAmount : 0} updateAmount={props.updateAmount}></NumberStepper>
          </div>
       </div>
    </>
  )
}