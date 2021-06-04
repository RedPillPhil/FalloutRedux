import React from "react";
import "./SpecialOutput.css";
let renderCount = 0;

const SpecialOutput = (props) => {
  return (
    <section className="stats-display">
      <ul className="stats-list">
        <li>{props.stats.strength}</li>
        <li>{props.stats.perception}</li>
        <li>{props.stats.endurance}</li>
        <li>{props.stats.charisma}</li>
        <li>{props.stats.intelligence}</li>
        <li>{props.stats.agility}</li>
        <li>{props.stats.luck}</li>
      </ul>
      <div className="remaining-points">
        Remaining points: {props.stats.remainingPoints}
      </div>
    </section>
  );
};

export default SpecialOutput;
