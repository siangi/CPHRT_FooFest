import React from 'react'
import BaseInput from '../inputs/BaseInput';
import P from '../typography/P';
import PayNowButton from '../buttons/PayNowButton';

function MobilePayForm(props) {
  return (
    <form>
      <BaseInput
        name="phone"
        id="phone"
        label="Phone Number (connected to Mobile Pay)"
        errormessage="please enter a valid phone number!"
        required={true}>
      </BaseInput>
      <P classModifiers="text-shade_darker_white">You will be redirected to the Mobile Pay App as soon as you submit</P>
      <PayNowButton action={props.onSubmit}></PayNowButton>
    </form>
  )
}

export default MobilePayForm