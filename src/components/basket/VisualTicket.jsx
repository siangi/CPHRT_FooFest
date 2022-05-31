import { Reac, useContext } from 'react'
import { ShopContext } from '../../contexts/ShopContext';
import H2 from '../typography/H2';
import H3 from '../typography/H3';
import H4 from '../typography/H4';
import P from '../typography/P';

export default function VisualTicket(props) {
    let { shopData } = useContext(ShopContext);
    return (

      <div className='border border-white flex flex-col p-6 mb-4 w-full md:w-fit h-fit'>
          <div>
            <H2 classModifiers="justify-center">Ticket type*</H2>
            <H3 classModifiers="flex justify-end font-medium text-white">Campground*</H3>
        </div>
          <div>
            {/* TO DO: replace thi with dynamic data after ticket.type is created */}
            <hr className='my-4'/>
            <H4 classModifiers="text-white font-bold">{props.value.firstname} {props.value.lastname}</H4>
            <P classModifiers="text-white">{props.value.address}, {props.value.zip} {props.value.city}</P>
            <P classModifiers="text-white">{props.value.email}</P>
            <P classModifiers="text-white">{props.value.phone}</P>
          </div>
          <div className="flex justify-center items-center w-full">
            <img src={process.env.PUBLIC_URL + "/barcode.svg"} alt="ticket barcode" 
              className="mt-6"/>
        </div>
      </div>
    );
  }

// TO DO: replace border-color with dynamic data after creating ticket.type
//   <div className={`${persons.ticket.type === "regular" ? "border-accent_yellow" : persons.ticket.type === "vip" ? "border-white" : null}`}>
//   </div>    