import React from "react";

function H2({ children }, props) {
  return (
    <div
      className={`text-3xl font-displayFont${
        props.classModifiers ? props.classModifiers : ""
      }`}
    >
      {children}
    </div>
  );
}

export default H2;
