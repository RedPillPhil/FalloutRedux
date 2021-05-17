import React, { Component } from "react";
import "./InputButton.css";

class InputButton extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (
      <button
        className="inputButton"
        onClick={() => {
          this.props.countNumbers(this.props.value);
        }}
      >
        Вычислить
      </button>
    );
  }
}

export default InputButton;
