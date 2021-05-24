import React from "react";
import "./SpecialInput.css";
import { Link } from "react-router-dom";
import { statsArray } from "../../../constants/resourses/stats.jsx";

const SpecialInput = ({ increment, decrement, saveStats, getStatPage }) => {
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
      <button className="save-character-button" onClick={saveStats}>
        SAVE CHARACTER
      </button>
    </article>
  );
};

export default SpecialInput;
