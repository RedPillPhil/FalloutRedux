import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import setOver from "../../../store/actions/setOver.jsx";
import unsetOver from "../../../store/actions/unsetOver.jsx";
import head from "../../../pics/head.png";
import find from "../../../pics/searchicon.png";

import "./Game.scss";
import PopupWindow from "./PopupWindow/PopupWindow.jsx";
import Inventory from "./Inventory/Inventory.jsx";
import { pipboy } from "../../../constants/imageImports.jsx";

const Game = React.memo(({ state, setOver, unsetOver }) => {
  const [positionX, setPositionX] = useState(130);
  const [positionY, setPositionY] = useState(-15);
  const [investigateIsShown, setinvestigateIsShown] = useState(false);
  const [inventoryIsShown, setinventoryIsShown] = useState(false);

  useEffect(() => {
    if (localStorage.length >= 2) {
      setPositionX(JSON.parse(localStorage.getItem(0)));
      setPositionY(JSON.parse(localStorage.getItem(1)));
    } else {
      localStorage.setItem(0, positionX);
      localStorage.setItem(1, positionY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(0, positionX);
    localStorage.setItem(1, positionY);
    if (
      state.quests[0].x - 830 < positionX &&
      state.quests[0].x - 760 > positionX &&
      (state.quests[0].y - 525) * -1 > positionY &&
      (state.quests[0].y - 470) * -1 < positionY
    ) {
      setOver();
    } else {
      unsetOver();
    }
  }, [positionX, positionY]);

  const moveCharacter = (e) => {
    if (investigateIsShown == false) {
      if (e.keyCode === 39 || e.keyCode === 68) {
        setPositionX((prevState) => prevState - 15);
      }
      if (e.keyCode === 37 || e.keyCode === 65) {
        setPositionX((prevState) => prevState + 15);
      }
      if (e.keyCode === 40 || e.keyCode === 83) {
        setPositionY((prevState) => prevState - 15);
      }
      if (e.keyCode === 38 || e.keyCode === 87) {
        setPositionY((prevState) => prevState + 15);
      }
    }
  };

  const toggleInventory = () => {
    setinventoryIsShown((prevState) => (prevState = !prevState));
  };

  const moveCharacterMemo = useMemo(
    () => moveCharacter,
    [positionX, positionY]
  );

  const toggleWindow = () => {
    setinvestigateIsShown((prevState) => (prevState = !prevState));
    if (!investigateIsShown) {
      unsetOver();
    } else {
      setOver();
    }
  };

  return (
    <main
      className="your-character"
      onKeyDown={moveCharacterMemo}
      tabIndex="0"
      style={{
        backgroundPositionX: positionX + "px",
        backgroundPositionY: positionY + "px",
      }}
    >
      <div
        className="pipboy-button"
        onClick={toggleInventory}
        style={
          inventoryIsShown || investigateIsShown
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <img src={pipboy} />
      </div>
      {inventoryIsShown ? (
        <Inventory
          inventoryIsShown={inventoryIsShown}
          toggleInventory={toggleInventory}
        />
      ) : (
        <></>
      )}
      <img
        src={head}
        className="head"
        style={{
          width: "30px",
        }}
      />
      <img
        className="point"
        src={find}
        style={{
          left: state.quests[0].x + positionX + "px",
          top: state.quests[0].y + positionY + "px",
        }}
      />
      {state.isOver ? (
        <button
          className="investigate-button"
          onClick={toggleWindow}
          style={inventoryIsShown ? { display: "none" } : { display: "block" }}
        >
          INVESTIGATE
        </button>
      ) : (
        <></>
      )}
      <PopupWindow
        investigateIsShown={investigateIsShown}
        toggleWindow={toggleWindow}
      />
    </main>
  );
});

const mapStateToProps = (state) => {
  return {
    state: state.changeStat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOver: () => {
      dispatch(setOver());
    },
    unsetOver: () => {
      dispatch(unsetOver());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
