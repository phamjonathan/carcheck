import React from 'react';
import API from '../utils/api';
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router'

class Signout extends React.Component{
state = {
    toDashboard: false,
}
componentDidMount(){
    API.signOut().then(this.logOut())
}
  logOut = () => { 
    console.log("hello")
    sessionStorage.setItem("user", "logout")
    this.setState({toDashboard:true})
   }
   render() {
    if(this.state.toDashboard === true){
        return <Redirect to='/' />
    }
    return(
        <div>  bye! </div>
    )
   }
}
export default withRouter(Signout);