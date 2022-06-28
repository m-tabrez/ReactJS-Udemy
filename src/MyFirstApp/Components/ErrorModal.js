import React from 'react'

const ErrorModal = (props) => {
  return (
    <>
        <div style={{ display : props.style ? 'none' : 'block' }} className="card" onClick={props.close}>
            <div className="card-body">
                <p>{props.msg}</p>
            </div>
        </div>
    </>
  )
}

export default ErrorModal