import React from 'react'

function StepIndicator(props) {
  return (
    <div className={`h-16 w-16 rounded-full flex justify-center items-center ${props.active? "bg-accent_yellow" :"bg-darkmode_black5"}`}>
            <img src={props.iconPath} alt={`form step ${props.label}`} 
            className="h-3/4 w-3/4"/>
    </div>
  )
}

export default StepIndicator