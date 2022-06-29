import React from 'react'

const Button = (props) => {
  return (
    <button 
        type={props.type || 'button'}
        className={props.className}
        disabled={props.disabled || false}>
        {props.value}
    </button>
  )
}

export default Button