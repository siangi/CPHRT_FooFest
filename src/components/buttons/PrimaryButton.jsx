import React from 'react'

function PrimaryButton(props) {
  return (
    <button 
    className='w-fit box-border bg-shade_darker_white 
    font-bodyFont text-darkmode_black tracking-wider 
    px-6 py-1 uppercase' 
    onClick={props.action} type={props.type === "" ? "button" : props.type}>
        {props.caption}
    </button>
  )
}

export default PrimaryButton