import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Login } from "./components/login-form/login";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
              <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
