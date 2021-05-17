import React, { Component } from "react";
import Input from "./Input/Input";
import DisplayNum from "./DisplayNum/DisplayNum";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { array: [] };
    this.countNumbers = this.countNumbers.bind(this);
  }

  countNumbers(data) {
    let tempArr = [];
    for (let i = data; i > 0; i--) {
      if (data % i == 0 && i != 1) {
        tempArr.push(i);
      }
    }
    this.setState({ array: [tempArr] });
  }

  render() {
    return (
      <div className="wrapper">
        <Input countNumbers={this.countNumbers} />,
        <DisplayNum array={this.state.array} />
      </div>
    );
  }
}

export default App;
