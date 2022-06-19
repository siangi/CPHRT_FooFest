import React from 'react'

function CheckBox(props) {
  return (
    <label htmlFor={props.name} className="font-bold font-bodyFont text-white">
          <input type="checkbox" name={props.name} id={props.id} checked={props.value} onChange={(event) => props.onChange(event.target.checked)}
            className=" bg-inherit border-white border-2 p-2 mr-2 accent-accent_yellow checked:bg-accent_yellow checked:hover:bg-accent_yellow checked:focus:bg-accent_yellow active:accent_yellow focus:ring-transparent focus:ring-offset-transparent"></input>
          {props.labelText}
    </label>
  )
}

export default CheckBox