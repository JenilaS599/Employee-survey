import React from 'react';
import Form from './form';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import employees from './pages/employees';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component = {Form}/>
          <Route path="/employees" exact component={employees}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
