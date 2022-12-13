import React from "react";

import "./Input.scss";

const Input = ({ text, updateText }) => {
  return (
    <input value={text} onChange={updateText} className="input" type="text" />
  );
};

export default Input;
