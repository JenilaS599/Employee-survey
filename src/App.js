import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './pages/navbar';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Employees from './pages/employees';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
        <Router>
        <Switch>
        <Route path="/" exact component = {HomePage}/>
          <Route path="/signup" exact component = {Signup}/>
          <Route path="/signin" exact component = {Signin}/>
          <Route path="/employees" exact component={Employees}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
