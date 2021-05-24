import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App.jsx";
import store from "./store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
