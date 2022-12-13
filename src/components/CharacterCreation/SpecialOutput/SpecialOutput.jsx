import React from "react";
import { connect } from "react-redux";

import "./SpecialOutput.scss";

const SpecialOutput = ({ stats }) => {
  return (
    <section className="special-output">
      <ul className="special-output__stats-list">
        <li>{stats.strength}</li>
        <li>{stats.perception}</li>
        <li>{stats.endurance}</li>
        <li>{stats.charisma}</li>
        <li>{stats.intelligence}</li>
        <li>{stats.agility}</li>
        <li>{stats.luck}</li>
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    stats: state.characterStats,
  };
};


export default connect(mapStateToProps)(SpecialOutput);
