import React, {Component} from 'react';
import './App.css';
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Signin from '../src/pages/Signin';
import Signup from '../src/pages/Signup';
import Table from '../src/components/Table';
import Cars from '../src/pages/Cars';
import API from '../src/utils/api';
import Signout from '../src/pages/Signout';

// import Footer from '../src/components/Footer';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

class App extends Component {
state = {
  name:""
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
      <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path= "/" exact component= {Home} />
        <Route path= "/About" component= {About} />
        <Route path= "/Cars" component= {Table} />
        <Route path= "/Signin" component= {Signin} />
        <Route path= "/Signout" component= {Signout} />
        <Route path= "/Signup" component= {Signup} />
        <Route path= "/Cars" component= {Cars} />
        </Switch>
       </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1> Lets Checkout Your Car  </h1>
    <h2> With Car Check </h2> 
    {/* <Footer/> */}
  </div>
)

export default App;
