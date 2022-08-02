import { React } from "react";
import H2 from "../typography/H2";
import H4 from "../typography/H4";
import P from "../typography/P";

export default function VisualTicket(props) {
  return (
    <>
      <div className='border border-white grid grid-cols-1 lg:grid-cols-2 p-6 mb-4 w-full h-fit gap-4 lg:gap-0'>
        <div className='flex flex-col'>
          <P classModifiers='text-white'>Ticket type:</P>
          <H2>{props.value.type}</H2>
        </div>
        <div>
          <H4 classModifiers='text-white font-bold'>
            {props.value.firstname.substring(0, 1).toUpperCase() +
              props.value.firstname.substring(1).toLowerCase()}{" "}
            {props.value.lastname.substring(0, 1).toUpperCase() +
              props.value.lastname.substring(1).toLowerCase()}
          </H4>
          <P classModifiers='text-white'>{props.value.address}</P>
          <P classModifiers='text-white'>
            {props.value.zip} {props.value.city}, {props.value.country}
          </P>
          <P classModifiers='text-white break-words'>{props.value.email}</P>
          <P classModifiers='text-white'>
            {props.value.countryCode} {props.value.phone}
          </P>
        </div>
      </div>
    </>
  );
}
