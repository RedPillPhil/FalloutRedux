import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import SingleStatConnected from "../containers/changeSingleStat.jsx";
import SpecialCreation from "./SpecialCreation/SpecialCreation.jsx";

const PageNotFound = () => {
  return <div>404</div>;
};

class App extends Component {
  state = { id: 0 };

  getStatPage = (id) => {
    this.setState({ id: id });
  };

  render() {
    return (
      <div className="falloutSpecial">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <SpecialCreation getStatPage={this.getStatPage} />}
            />
            <Route
              path="/:id"
              render={() => <SingleStatConnected id={this.state.id} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
