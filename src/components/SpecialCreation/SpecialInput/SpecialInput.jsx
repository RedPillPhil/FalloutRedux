import React, { useState } from "react";
import "./SpecialInput.css";
import { Link } from "react-router-dom";
import { statsArray } from "../../../constants/resourses/stats.jsx";
import { connect } from "react-redux";
import incrementStat from "../../../store/actions/incrementAction";
import decrementStat from "../../../store/actions/decrementAction";
import saveCharacter from "../../../store/actions/saveCharacterAction";

const SpecialInput = ({
  increment,
  decrement,
  getStatPage,
  saveStats,
  state,
}) => {
  const [characterName, setCharacterName] = useState("");
  const alertUnspentPointWarn = () => {
    alert(`You have ${state.remainingPoints} unspent points!`);
  };

  const handleChange = (e) => {
    setCharacterName(e.target.value);
  };

  const saveName = () => {
    localStorage.setItem(2, characterName);
    saveStats(characterName);
    localStorage.setItem("stats", JSON.stringify({ strength: state.strength }));
  };

  return (
    <article className="specialInput">
      <label>
        CHARACTER NAME:{" "}
        <input type="text" onChange={handleChange} value={characterName} />
      </label>
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
          <button className="save-character-button" onClick={saveName}>
            SAVE CHARACTER
          </button>
        </Link>
      )}
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.changeStat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id) => dispatch(incrementStat(id)),
    decrement: (id) => dispatch(decrementStat(id)),
    saveStats: (name) => dispatch(saveCharacter(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecialInput);
