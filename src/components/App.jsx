import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterCreation from "./CharacterCreation/CharacterCreation.jsx";
import CreatedCharacter from "./CreatedCharacter/CreatedCharacter.jsx";

import "./App.scss";
import "./reset.css"

const PageNotFound = () => {
  return <div>404</div>;
};

const App = () => {
  const [id, setId] = useState(0);

  const getStatPage = (id) => {
    setId(id);
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <CharacterCreation getStatPage={getStatPage} />}
          />
          <Route exact path="/character" component={CreatedCharacter} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
