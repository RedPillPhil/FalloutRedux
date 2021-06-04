import React from "react";
import "./SpecialInput.css";
import { Link } from "react-router-dom";
import { statsArray } from "../../../constants/resourses/stats.jsx";

import incrementStat from "../../../store/actions/incrementAction";
import decrementStat from "../../../store/actions/decrementAction";
import saveCharacter from "../../../store/actions/saveCharacterAction";

const SpecialInput = ({
  increment,
  decrement,
  saveStats,
  getStatPage,
  state,
}) => {
  console.log(state);

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
      <Link to="/character">
        <button className="save-character-button" onClick={saveCharacter}>
          SAVE CHARACTER
        </button>
      </Link>
    </article>
  );
};

export default SpecialInput;
