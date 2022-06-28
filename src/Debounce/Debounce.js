import React, {useEffect, useState} from 'react'
import HomePage from './HomePage';
import LoginForm from './LoginForm'


const Debounce = () => {

    const [isAuth, setIsAuth] = useState(false);

    const isAuthenticated = (props) => {
        console.log(props)
        setIsAuth(props)
    }

    


  return (
    <div className='container py-5'>
        { isAuth ? <HomePage isAuthenticated={isAuthenticated}/> : <LoginForm isAuthenticated={isAuthenticated}/> } 

    </div>
  )
}

export default Debounce