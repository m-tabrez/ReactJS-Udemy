import React from 'react'

const Input = (props) => {
  return (
    <>
        <label htmlFor={props.id}>{props.label}</label>
        <input className='form-control' {...props.input} />
    </>
  )
}

export default Input