import React, {Component} from 'react';
import Footer from '../components/Footer';
import API from '../utils/api';

class Signin extends Component {
  state= {
    username: "",
    password: "",
  }
  handleinputchange = (event) => {
    const{name,value} = event.target
    this.setState({
      [name]: value
    })
    console.log(value)
  }
  handleformsubmit = (event) => {
    console.log("username:",this.state.username)
    console.log("password:",this.state.password)
    API.signIn(this.state).then(data => {
      console.log(data)
      sessionStorage.setItem("user", "login")
      window.location.href="/"

    })
  }
  render(){
    return (
      <div className="App">
      <h1> Sign In </h1>
      Username <input 
      name = "username" 
      value= {this.state.username} 
      onChange={this.handleinputchange} 
      type="text"/> <br/>
      <br></br>

      Password <input 
      name = "password" 
      value= {this.state.password} 
      onChange={this.handleinputchange} 
      type="password"/> <br/>
      <br></br>
      
      <button onClick={this.handleformsubmit}> Submit </button>
      <Footer />
    </div>
    );
  }
}

export default Signin;
