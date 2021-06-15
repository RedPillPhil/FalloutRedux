import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import setOver from "../../../store/actions/setOver.jsx";
import unsetOver from "../../../store/actions/unsetOver.jsx";
import head from "../../../pics/head.png";
import find from "../../../pics/searchicon.png";

import "./Game.scss";
import PopupWindow from "./PopupWindow/PopupWindow.jsx";

const Game = React.memo(({ state, setOver, unsetOver }) => {
  const [positionX, setPositionX] = useState(130);
  const [positionY, setPositionY] = useState(-15);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (localStorage.length > 0) {
      setPositionX(JSON.parse(localStorage.getItem(0))[0]);
      setPositionY(JSON.parse(localStorage.getItem(0))[1]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(0, JSON.stringify([positionX, positionY]));
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
    if (shown == false) {
      if (e.keyCode === 39) {
        setPositionX((prevState) => prevState - 15);
      }
      if (e.keyCode === 37) {
        setPositionX((prevState) => prevState + 15);
      }
      if (e.keyCode === 40) {
        setPositionY((prevState) => prevState - 15);
      }
      if (e.keyCode === 38) {
        setPositionY((prevState) => prevState + 15);
      }
    }
  };

  const moveCharacterMemo = useMemo(
    () => moveCharacter,
    [positionX, positionY]
  );

  const toggleWindow = () => {
    setShown((prevState) => (prevState = !prevState));
    if (!shown) {
      unsetOver();
    } else {
      setOver();
    }
  };

  return (
    <main
      className='your-character'
      onKeyDown={moveCharacterMemo}
      tabIndex='0'
      style={{
        backgroundPositionX: positionX + "px",
        backgroundPositionY: positionY + "px",
      }}
    >
      <img
        src={head}
        className='head'
        style={{
          width: "30px",
        }}
      />
      <img
        className='point'
        src={find}
        style={{
          left: state.quests[0].x + positionX + "px",
          top: state.quests[0].y + positionY + "px",
        }}
      />
      {state.isOver ? (
        <button className='investigate-button' onClick={toggleWindow}>
          INVESTIGATE
        </button>
      ) : (
        <></>
      )}
      <PopupWindow isShown={shown} toggleWindow={toggleWindow} />
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
