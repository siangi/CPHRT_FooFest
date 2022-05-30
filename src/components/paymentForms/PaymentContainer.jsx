import React from 'react';
import RadioButton from '../inputs/RadioButton';

function PaymentContainer() {
  return (
    <div className='h-full bg-darkmode_black2 p-4'>
        <div className='flex flex-row w-full gap-3 text-shade_darker_white'>
            <RadioButton groupName="pay-options" id="credit-card" label="credit card"></RadioButton>
            <RadioButton groupName="pay-options" id="mobile-pay" label="mobile pay"></RadioButton>
            <RadioButton groupName="pay-options" id="bill" label="bill"></RadioButton>

        </div>
    </div>
  )
}

export default PaymentContainer