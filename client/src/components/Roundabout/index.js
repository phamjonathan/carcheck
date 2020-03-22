import React, { Component } from "react";
import Nav from '../Nav';
import About from '../About';
import Signin from '../Signin';
import Signup from '../Signup';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App () {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path= "/" exact component= {Home} />
      <Route path= "/About" component= {About} />
      <Route path= "/Signin" component= {Signin} />
      <Route path= "/Signup" component= {Signup} />
      </Switch>
     </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1> Find Your Dream Car  </h1>
    <h2> With Car Check </h2> 
  </div>
)

export default Roundabout;