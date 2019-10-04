import React from "react";
import { Route, IndexRoute /*, withRouter*/ } from "react-router";
import App from "../App/App";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "../SignUp/SignUp";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/signup" component={SignUp} />
  </Route>
);
