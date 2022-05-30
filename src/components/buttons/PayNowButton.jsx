import React from 'react'

function PayNowButton(props) {
  return (
    <button 
    className='w-fit h-fit box-border bg-shade_darker_white 
    font-bodyFont text-darkmode_black tracking-wider 
    px-6 py-1 uppercase' 
    onClick={props.action}>
        Pay Now!
    </button>
  )
}

export default PayNowButton