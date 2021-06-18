import React, { useState } from "react";
import Stats from "./Stats/Stats.jsx";
import Inventory from "./Inventory/Inventory.jsx";
import "./Pipboy.scss";

const Pipboy = ({ toggleInventory }) => {
  const [statWindowIsShown, setStatWindowIsShown] = useState(true);

  const handleSwitchToInventory = () => {
    setStatWindowIsShown(false);
  };

  const handleSwitchToStats = () => {
    setStatWindowIsShown(true);
  };

  return (
    <main className="pipboy-inventory">
      <div className="top-bar">
        <button className="top-bar__close-btn" onClick={toggleInventory}>
          x
        </button>
      </div>
      <article className="pipboy">
        {statWindowIsShown ? <Stats /> : <Inventory />}
        <nav className="pipboy-nav">
          <ul className="pipboy-nav-list">
            <li
              className="nav-list-item"
              onClick={handleSwitchToStats}
              style={
                statWindowIsShown
                  ? { color: "rgb(27, 87, 54)" }
                  : { color: "rgb(38, 202, 112)" }
              }
            >
              STATS
            </li>
            <li
              className="nav-list-item"
              onClick={handleSwitchToInventory}
              style={
                !statWindowIsShown
                  ? { color: "rgb(27, 87, 54)" }
                  : { color: "rgb(38, 202, 112)" }
              }
            >
              INVENTORY
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
};

export default Pipboy;
