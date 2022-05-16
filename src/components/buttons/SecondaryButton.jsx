import React from 'react'

function SecondaryButton(props) {
  return (
    <button className="box-border text-shade_darker_white tracking-wider 
        border-shade_darker_white border-2 px-5 py-0.5" 
        onClick={props.action}>{props.caption}
    </button>

  )
}

export default SecondaryButton