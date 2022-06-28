import React from 'react'

const Button = (props) => {
  return (
    <>
        <button {...props.input}>{props.value}</button>
    </>
  )
}

export default Button