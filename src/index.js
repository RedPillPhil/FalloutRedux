import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import store from "./components/store/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
