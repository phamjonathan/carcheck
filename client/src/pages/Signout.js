import React from 'react'
import API from '../utils/api';
function Signout () {


  const logOut = () => {
           sessionStorage.setItem("user", "logout")
   }
    return(
        <div>  bye! </div>
    )
}


export default Signout;