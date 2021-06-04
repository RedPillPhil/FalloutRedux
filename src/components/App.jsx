import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import SingleStatConnected from "../containers/changeSingleStat.jsx";
import SpecialCreation from "./SpecialCreation/SpecialCreation.jsx";
import CreatedCharacter from "./CreatedCharacter/CreatedCharacter.jsx";

const PageNotFound = () => {
  return <div>404</div>;
};

const App = () => {
  const [id, setId] = useState(0);

  const getStatPage = (id) => {
    setId(id);
  };

  return (
    <div className="falloutSpecial">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <SpecialCreation getStatPage={getStatPage} />}
          />
          <Route exact path="/character" component={CreatedCharacter} />
          <Route
            exact
            path="/:id"
            render={() => <SingleStatConnected id={id} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
