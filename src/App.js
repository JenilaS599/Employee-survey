import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import employees from './pages/employees';
import Navbar from './pages/navbar';
import Signup from './pages/signup';
import Signin from './pages/signin';

function App() {
  return (
    <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route path="/signup" exact component = {Signup}/>
          <Route path="/signin" exact component = {Signin}/>
          <Route path="/employees" exact component={employees}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
