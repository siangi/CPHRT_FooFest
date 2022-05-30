import {React, useState} from 'react';
import RadioButton from '../inputs/RadioButton';
import CreditCardForm from './CreditCardForm';
import MobilePayForm from './MobilePayForm';
import BillForm from './BillForm';

function PaymentContainer() {
  const [activePayOption, setActivePayOption] = useState("bill")
  return (
    <div className='h-full bg-darkmode_black2 p-4'>
        <div className='flex flex-row w-full gap-3 text-shade_darker_white'>
            <RadioButton groupName="pay-options" id="credit-card" label="credit card"></RadioButton>
            <RadioButton groupName="pay-options" id="mobile-pay" label="mobile pay"></RadioButton>
            <RadioButton groupName="pay-options" id="bill" label="bill"></RadioButton>  
        </div>
        {activePayOption === "bill" && <BillForm></BillForm>}
        {activePayOption === "credit-card" && <CreditCardForm></CreditCardForm>}
    </div>
  )
}

export default PaymentContainer