import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ done }) => {
  return (
    <div
      className="progress-bar"
      style={done === 100 ? { opacity: 0 } : { opacity: 100 }}
    >
      <div className="progress" style={{ width: `${done}%` }}>
        {done}%
      </div>
    </div>
  );
};

export default ProgressBar;
