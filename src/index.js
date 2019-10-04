import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Application/Reducers";

import routes from "./Components/Navigation/routes";
import "./assets/scss/base.scss";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    //Uncomment below for development
    //window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("root")
);
