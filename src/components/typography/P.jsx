import React from 'react'

function P(props) {
  return (
    <p className={`text-base font-bodyFont ${props.classModifiers}`}>{props.children}</p>
  )
}

export default P