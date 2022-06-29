import React from "react"

const SmallContext = React.createContext({
    isAuth : false,

});

export const SmallContextProvider = (props) => {
    
    return(
        <>
         {props.children}
       </> 
    )
}

export default SmallContext