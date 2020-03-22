import React from 'react';
import './App.css';
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Signin from '../src/components/Signin';
import Signup from '../src/components/Signup';
import Table from '../src/components/Table';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path= "/" exact component= {Home} />
      <Route path= "/About" component= {About} />
      <Route path = "/Cars" component= {Table} />
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

export default App;
