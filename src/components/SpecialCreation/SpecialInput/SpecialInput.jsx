import React from "react";
import "./SpecialInput.css";
import { Link } from "react-router-dom";
import { statsArray } from "../../../constants/resourses/stats.jsx";

import saveCharacter from "../../../store/actions/saveCharacterAction";

const SpecialInput = ({ increment, decrement, getStatPage, state }) => {
  const alertUnspentPointWarn = () => {
    alert(`You have ${state.remainingPoints} unspent points!`);
  };

  return (
    <article className="specialInput">
      <ul className="specialInput-list">
        {statsArray.map((item, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  decrement(item.toLocaleLowerCase());
                }}
              >
                -
              </button>
              <Link
                to={"/" + item.toLocaleLowerCase()}
                onClick={() => {
                  getStatPage(index);
                }}
                className="stat-link"
              >
                {item}
              </Link>
              <button
                onClick={() => {
                  increment(item.toLocaleLowerCase());
                }}
              >
                +
              </button>
            </li>
          );
        })}
      </ul>
      {state.remainingPoints !== 0 ? (
        <button
          className="save-character-button"
          onClick={alertUnspentPointWarn}
        >
          SAVE CHARACTER
        </button>
      ) : (
        <Link to="/character">
          <button className="save-character-button" onClick={saveCharacter}>
            SAVE CHARACTER
          </button>
        </Link>
      )}
    </article>
  );
};

export default SpecialInput;
