import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import setOver from "../../../store/actions/setOver.jsx";
import unsetOver from "../../../store/actions/unsetOver.jsx";
import loadGame from "../../../store/actions/loadGame.jsx";
import head from "../../../pics/head.png";
import find from "../../../pics/searchicon.png";

import "./Game.scss";
import PopupWindow from "./PopupWindow/PopupWindow.jsx";
import Pipboy from "./Pipboy/Pipboy.jsx";
import RandomEncounter from "./RandomEncounter/RandomEncounter.jsx";
import { pipboy } from "../../../constants/imageImports.jsx";

const Game = React.memo(({ state, setOver, unsetOver, loadGame }) => {
  const [positionX, setPositionX] = useState(130);
  const [positionY, setPositionY] = useState(-15);
  const [investigateIsShown, setinvestigateIsShown] = useState(false);
  const [inventoryIsShown, setinventoryIsShown] = useState(false);
  const [randomEncounter, setRandomEncounter] = useState(false);

  useEffect(() => {
    if (localStorage.length >= 2) {
      setPositionX(JSON.parse(localStorage.getItem("x")));
      setPositionY(JSON.parse(localStorage.getItem("y")));
    } else {
      localStorage.setItem("x", positionX);
      localStorage.setItem("y", positionY);
    }

    loadGame();
  }, []);

  useEffect(() => {
    localStorage.setItem("x", positionX);
    localStorage.setItem("y", positionY);
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

    const randomNumber = (Math.random() * 100).toFixed(2);

    if (randomNumber < 5 + 1 && randomNumber > 5 - 1) {
      setRandomEncounter(true);
    }
  }, [positionX, positionY]);

  const moveCharacter = (e) => {
    if (
      investigateIsShown == false ||
      inventoryIsShown == false ||
      randomEncounter == false
    ) {
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

  const toggleRandomEncounter = () => {
    setRandomEncounter(false);
  };

  const moveCharacterMemo = useMemo(
    () => moveCharacter,
    [positionX, positionY]
  );

  const blankFunction = () => {};

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
      onKeyDown={
        investigateIsShown || inventoryIsShown || randomEncounter
          ? blankFunction
          : moveCharacterMemo
      }
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
          inventoryIsShown || investigateIsShown || randomEncounter
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <img src={pipboy} />
      </div>
      {inventoryIsShown ? (
        <Pipboy
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
          style={
            inventoryIsShown || randomEncounter
              ? { display: "none" }
              : { display: "block" }
          }
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
      {randomEncounter ? (
        <RandomEncounter toggleRandomEncounter={toggleRandomEncounter} />
      ) : (
        <></>
      )}
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
    loadGame: () => {
      dispatch(loadGame());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
