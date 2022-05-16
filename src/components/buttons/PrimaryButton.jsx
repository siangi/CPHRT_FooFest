import React from 'react'

function PrimaryButton(props) {
  return (
    <button 
    className='box-border bg-shade_darker_white 
    font-bodyFont text-darkmode_black tracking-wider 
    px-6 py-1' 
    onClick={props.action}>
        {props.caption}
    </button>
  )
}

export default PrimaryButton