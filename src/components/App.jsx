import React, { Component } from "react";
import SpecialInputConnected from "../containers/changeStatContainer.jsx";
import SpecialOutputConnected from "../containers/showStatsContainer.jsx";
import pic from "../pics/vaultboy.png";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./App.css";
import SingleStat from "./SpecialCreation/SpecialInput/SingleStat/SingleStat.jsx";

const PageNotFound = () => {
  return <div>404</div>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
    this.getStatPage = this.getStatPage.bind(this);
  }

  getStatPage = (id) => {
    this.setState({ id: id });
  };

  render() {
    return (
      <div className="falloutSpecial">
        <Router>
          <Switch>
            <Route exact path="/">
              <img className="vaultboyImage" src={pic} />
              <SpecialInputConnected getStatPage={this.getStatPage} />
              <SpecialOutputConnected />
            </Route>
            <Route path="/:id">
              <SingleStat id={this.state.id} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
