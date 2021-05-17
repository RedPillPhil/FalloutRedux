import React, { Component } from "react";
import "./DisplayNum.css";

class DisplayNum extends Component {
  render() {
    return (
      <section className="displayBlock">
        Делители этого числа: {this.props.array.toString()}
      </section>
    );
  }
}

export default DisplayNum;
