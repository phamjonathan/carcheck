import React, {Component} from 'react';
import Footer from '../components/Footer';
import API from '../utils/api';

class Signup extends Component {
  state= {
    name: "",
    email: "",
    username: "",
    password: ""
  }
  handleinputchange = (event) => {
      const{name,value} = event.target
      this.setState({
        [name]: value
      })

      console.log(value)
  }
  handleformsubmit = (event) => {
    console.log("name:",this.state.name)
    console.log("email:",this.state.email)
    console.log("username:",this.state.username)
    console.log("password:",this.state.password)
    API.signUp(this.state).then(data => {
      console.log(data)
     sessionStorage.setItem("user", data.data.name)
      window.location.href= "/"
    })
      
  }
  render(){
    return (
      <div className="App">
        <h1> Sign Up </h1>
        Name <input  name = "name" value= {this.state.name}  onChange={this.handleinputchange} /> <br />
        Email <input name = "email" value= {this.state.email} onChange={this.handleinputchange} type="email" /> <br />
        Username <input name = "username" value= {this.state.username} onChange={this.handleinputchange} /> <br />
        Password <input name = "password" value= {this.state.password} onChange={this.handleinputchange} type="password" /> <br />
        <button onClick={this.handleformsubmit}> Submit </button>
        <Footer />
      </div>
  
    );
  }
}

export default Signup;
