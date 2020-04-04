import React from 'react';
import './App.css';
import Table from './components/Table';
import Nav from './components/Nav';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Cars from './pages/Cars';
import Signout from './pages/Signout';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Cars" component={Table} />
          <Route path="/Signin" component={Signin} />
          <Route path="/Signout" component={Signout} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Cars" component={Cars} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
