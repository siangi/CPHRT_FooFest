import React from 'react'

function SecondaryButton(props) {
  return (
    <button className="w-full md:w-fit box-border text-shade_darker_white tracking-wider uppercase
        outline outline-shade_darker_white outline-1 hover:outline-accent_yellow2 hover:text-accent_yellow2 px-6 py-3 lg:py-2" 
        onClick={props.action}>{props.caption}
    </button>

  ) 
}

export default SecondaryButton