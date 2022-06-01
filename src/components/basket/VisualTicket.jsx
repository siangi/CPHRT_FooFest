import { Reac, useContext } from 'react'
import { ShopContext } from '../../contexts/ShopContext';
import H2 from '../typography/H2';
import H4 from '../typography/H4';
import P from '../typography/P';

export default function VisualTicket(props) {
    let { shopData } = useContext(ShopContext);
    return (

      <div className='border border-white flex p-6 mb-4 w-fit h-full gap-4'>
          <div>
            <H2 classModifiers="justify-center">Ticket type*</H2>
            {/* <H2 classModifiers="justify-center">{props.value.type}</H2> */}
        </div>
          <div>
            <H4 classModifiers="text-white font-bold">{props.value.firstname} {props.value.lastname}</H4>
            <P classModifiers="text-white">{props.value.address}</P>
            <P classModifiers="text-white">{props.value.zip} {props.value.city}</P>
            <P classModifiers="text-white">{props.value.email}</P>
            <P classModifiers="text-white">{props.value.phone}</P>
          </div>
      </div>
    );
  }

// TO DO: replace border-color with dynamic data after creating ticket.type
//   <div className={`${persons.ticket.type === "regular" ? "border-accent_yellow" : persons.ticket.type === "vip" ? "border-white" : null}`}>
//   </div>    