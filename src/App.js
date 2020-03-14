import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Signin from './Signin';
import Signup from './Signup';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
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
    <h1> Home Page </h1>
  </div>
)

export default App;
