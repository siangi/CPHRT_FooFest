import React from 'react'

function SecondaryButton(props) {
  return (
    <button className="w-full md:w-fit box-border text-shade_darker_white tracking-wider uppercase
        border-shade_darker_white border-2 px-5 py-2-5 outline-offset-0 hover:border-accent_yellow2" 
        onClick={props.action}>{props.caption}
    </button>

  )
}

export default SecondaryButton