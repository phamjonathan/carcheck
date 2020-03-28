import React, {Component} from 'react';
// import './App.css';
import { Link } from 'react-router-dom';
import API from '../../utils/api';

const navStyle = {
    color: 'white'
};
class Nav extends Component {
    state = {
        name: "",
        
    }
    componentDidMount(){
        API.getUser().then(user => {
          console.log("user:",user.data.name)
          this.setState({
            name: user.data.name
          })
        })
      }
    
    render(){
        return (
            <nav>
                <h2> Car Check </h2>
                <ul className="nav-Links">
    
                    <Link style= {navStyle} to= "/">
                    <li> Home </li>
                    </Link>
    
                    <Link style= {navStyle} to= "/About">
                    <li> About </li>
                    </Link>
    
                    <Link style= {navStyle} to= "/Cars">
                    <li> Find Cars </li>
                    </Link>
                    {console.log("getUser",this.state.name)}

                   {
                    this.state.name === undefined || this.state.name.length === 0 ? (
                    
                    <div>
                    <Link style= {navStyle} to= "/Signin">
                    <li> Sign In </li> 
                    </Link>

                    <Link style= {navStyle} to= "/Signup">
                    <li> Sign Up </li>
                    </Link>
                    </div>
                    ):(
                    <Link style= {navStyle} to= "/Signout" onClick={() => this.setState({name:""})}>
                    <li> Sign Out </li>  Hello {this.state.name}
                    </Link>
                    )
                   }
        
                </ul>
            </nav>
        );
    }
    
}

export default Nav;

