import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./SubmitCharacter.scss";

export const SubmitCharacter = ({ saveName, alertUnspentPointWarn }) => {
  const stats = useSelector((state) => state.characterStats);

  if (stats.remainingPoints !== 0) {
    return (
      <button
        className="submit-character"
        onClick={() => alertUnspentPointWarn(stats.remainingPoints)}
      >
        SAVE CHARACTER
      </button>
    );
  } else {
    return (
      <Link to="/character">
        <button className="submit-character" onClick={saveName}>
          SAVE CHARACTER
        </button>
      </Link>
    );
  }
};

export default SubmitCharacter;
