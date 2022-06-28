import React, { useEffect, useState } from 'react'
import Button from './Button'
import Input from './Input'

const LoginForm = ( props ) => {

    const [isValid, setIsvalid] = useState(true);

    const [formValue, setFormValue] = useState({
        username : '',
        password : ''
    });

    const onChangeHandler = (event) => {
       const name = event.target.name;

       setFormValue( prevals => {
            return {
                ...prevals,
                [name] : event.target.value
            }
       })
    }

    useEffect( () => {

        const saveTimer = setTimeout( () => {
            if(formValue.username.length > 0 && formValue.password.length > 0){
                setIsvalid(false);

            }else{
                setIsvalid(true);
            }
        }, 500)

        return () => { 
            clearTimeout(saveTimer)
        }

    }, [formValue])

    const onSubmitHandler = () => {
        console.log('submited')
        props.isAuthenticated(true);
    }

  return (
    <div className='col-6 offset-3'>
        <Input id="username" label="User Name" input={{
            type : 'text',
            placeholder : 'Enter Name',
            onChange : onChangeHandler,
            name : 'username'
        }} />
         <Input id="password" label="Password" input={{
            type : 'password',
            placeholder : 'Enter Password',
            onChange : onChangeHandler,
            name : 'password'
        }} />
        <Button value="submit" input={{
            type : 'button',
            className : 'btn btn-primary',
            disabled : isValid,
            onClick : onSubmitHandler
        }} />
    </div>
  )
}

export default LoginForm 