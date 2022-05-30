import React from 'react'
import PayNowButton from '../buttons/PayNowButton'
import BaseInput from '../inputs/BaseInput'

function CreditCardForm() {
  return (
    <form>
      <BaseInput name="holder-name"
        id="holder-name"
        required={true}
        label="Cardholder"
        errormessage="please enter the name of the card owner">
      </BaseInput>
      <BaseInput name="card-number" 
        id="card-number" 
        required={true} 
        label="Card Number" 
        errormessage="please enter a valid (17 digit) credit card number">
      </BaseInput>
      <div className='flex flex-row gap-4'>
        <BaseInput name="expiry-date"
          id="expiry-date"
          required={true}
          label="Expiration Date (MM/YY)"
          errormessage="please enter a valid expiration date format (MM/YY)">
        </BaseInput>
        <BaseInput name="security-code"
          id="security-code"
          required={true}
          label="Security Code"
          errormessage="please enter a valid security code!">
        </BaseInput>
      </div>
      <PayNowButton></PayNowButton>
    </form>
  )
}

export default CreditCardForm