import React from "react";
import { connect } from "react-redux";
import {
  vaultboyfullhp,
  vaultboynohp,
} from "../../../../../constants/imageImports.jsx";

import "./Stats.scss";

const Stats = ({ special, injuries }) => {
  const health = 100 + 10 * special.strength;
  return (
    <div className="pipboy-special">
      <section className="pipboy-stats">
        <h3>{localStorage.getItem("name")}</h3>
        <img src={health > 50 ? vaultboyfullhp : vaultboynohp} />
        <div>Health: {health}</div>
        <div>Injuries: {injuries}</div>
      </section>
      <ul className="special">
        <li>
          STRENGTH: <div className="special-item">{special.strength}</div>
        </li>
        <li>
          PEPCEPTION: <div className="special-item">{special.perception}</div>
        </li>
        <li>
          ENDURANCE: <div className="special-item">{special.endurance}</div>
        </li>
        <li>
          CHARISMA: <div className="special-item">{special.charisma}</div>
        </li>
        <li>
          INTELLIGENCE:{" "}
          <div className="special-item">{special.intelligence}</div>
        </li>
        <li>
          AGILITY: <div className="special-item">{special.agility}</div>
        </li>
        <li>
          LUCK: <div className="special-item">{special.luck}</div>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    special: {
      strength: state.characterStats.strength,
      perception: state.characterStats.perception,
      endurance: state.characterStats.endurance,
      charisma: state.characterStats.charisma,
      intelligence: state.characterStats.intelligence,
      agility: state.characterStats.agility,
      luck: state.characterStats.luck,
    },
    characterName: state.characterStats.characterName,
    injuries: state.characterStats.injuries,
  };
};

export default connect(mapStateToProps)(Stats);
