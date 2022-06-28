import Button from './Button';
import React from 'react'

const HomePage = (props) => {

    const logOutClick = () => {
        props.isAuthenticated();
    }

  return (
    <div className='border' >
        <h3>HOME PAGE</h3>
        <Button value="Logout" input={{
            type : 'button',
            className : 'btn btn-danger',
            onClick : logOutClick
        }} />
      
    </div>
  )
}

export default HomePage