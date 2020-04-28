import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import User from "./user/pages/User";
import Place from "./places/pages/Place";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <User />
        </Route>
        <Route path='/places/new' exact>
          <Place />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
