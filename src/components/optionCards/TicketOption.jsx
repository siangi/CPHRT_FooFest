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
          
          <div className='flex flex-col justify-between mt-6 md:mt-4'>
            <P classModifiers={`${props.title === "Premium" ? "text-accent_yellow font-bold " : "text-white"} leading-none`}>{props.description}</P>
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