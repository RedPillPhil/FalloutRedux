import React from "react";
import { connect } from "react-redux";
import { vaultboyfullhp } from "../../../../constants/imageImports.jsx";
import "./Inventory.scss";

const Inventory = ({ toggleInventory, special, injuries, characterName }) => {
  return (
    <main className="inventory">
      <div className="top-bar">
        <button className="top-bar__close-btn" onClick={toggleInventory}>
          x
        </button>
      </div>
      <article className="pipboy">
        <div className="pipboy-special">
          <section className="pipboy-stats">
            <h3>{localStorage.getItem(2)}</h3>
            <img src={vaultboyfullhp} />
            <div>Health: {100 + 10 * special.strength}</div>
            <div>Injuries: {injuries}</div>
          </section>
          <ul className="special">
            <li>
              STRENGTH: <div className="special-item">{special.strength}</div>
            </li>
            <li>
              PEPCEPTION:{" "}
              <div className="special-item">{special.perception}</div>
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
        <nav className="pipboy-nav"></nav>
      </article>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    special: {
      strength: state.changeStat.strength,
      perception: state.changeStat.perception,
      endurance: state.changeStat.endurance,
      charisma: state.changeStat.charisma,
      intelligence: state.changeStat.intelligence,
      agility: state.changeStat.agility,
      luck: state.changeStat.luck,
    },
    characterName: state.changeStat.characterName,
    injuries: state.changeStat.injuries,
  };
};

export default connect(mapStateToProps)(Inventory);
