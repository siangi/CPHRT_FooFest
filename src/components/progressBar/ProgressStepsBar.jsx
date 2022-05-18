import React from 'react';
import StepIndicator from "./StepIndicator";

function ProgressStepsBar(props) {
  return (
    <div className='w-full h-16 flex justify-between items-center'>
        {
            props.steps.map((step, index) => {
                if(index < props.steps.length - 1){
                    return (
                        <>
                            <StepIndicator iconPath={step.iconPath} label={step.label} active={props.activeIndex === index}></StepIndicator>
                            <div className='h-0 border-2 border-darkmode_black6 flex-auto'></div>
                        </>)
                } else {
                    return (<StepIndicator iconPath={step.iconPath} label={step.label} active={props.activeIndex === index}></StepIndicator>)
                }
            })
        }
    </div>
  )
}

export default ProgressStepsBar