import React from "react";

function PrimaryButton(props) {
  return (
    <button
      className="w-full md:w-fit h-fit box-border bg-shade_darker_white 
    font-bodyFont text-darkmode_black tracking-wider 
    px-6 py-3 lg:py-2 uppercase hover:bg-accent_yellow2"
      onClick={props.action}
    >
      {props.caption}
    </button>
  );
}

export default PrimaryButton;
