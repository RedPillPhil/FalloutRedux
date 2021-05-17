import React, { Component } from "react";
import "./Input.css";
import InputButton from "./InputButton/InputButton";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <section className="inputBlock">
        <input
          type="text"
          className="inputNum"
          placeholder="Введите число"
          onChange={this.handleChange}
        />
        <InputButton
          value={this.state.value}
          countNumbers={this.props.countNumbers}
        />
      </section>
    );
  }
}

export default Input;
