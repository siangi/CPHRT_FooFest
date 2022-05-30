import React from 'react'

function RadioButton(props) {
  return (
    <label htmlFor={props.id} className="font-bodyFont">
        <input type="radio" id={props.id} name={props.groupName}
            className="mr-1 bg-transparent border-shade_darker_white border-2 checked:bg-accent_yellow active:bg-accent_yellow focus:bg-accent_yellow focus:ring-accent_yellow focus:ring-offset-transparent"></input>
        {props.label}
    </label>
  )
}

export default RadioButton