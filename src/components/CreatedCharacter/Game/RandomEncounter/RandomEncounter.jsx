import React from "react";
import { connect } from "react-redux";
import { randomEvents } from "../../../../constants/randomEvents.jsx";
import "./RandomEncounter.scss";

const RandomEncounter = ({ agility, toggleRandomEncounter }) => {
  const handleClick = () => {
    if (agility > 5) {
      alert("You succesfully ran from raider!");
      toggleRandomEncounter();
    } else {
      alert("You've lost 20 HP!");
      toggleRandomEncounter();
    }
  };

  return (
    <main className="random-encounter-window">
      <p>You have met a raider</p>
      <img src={randomEvents.raider} />
      <button onClick={handleClick}>TRY TO RUN</button>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    agility: state.characterStats.agility,
  };
};

export default connect(mapStateToProps)(RandomEncounter);
