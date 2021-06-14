import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import setOver from "../../../store/actions/setOver.jsx";
import unsetOver from "../../../store/actions/unsetOver.jsx";
import head from "../../../pics/head.png";
import find from "../../../pics/searchicon.png";

import "./Game.scss";

const Game = React.memo(({ state, setOver }) => {
  console.log(state.quests[0]);
  const [positionX, setPositionX] = useState(130);
  const [positionY, setPositionY] = useState(-15);

  useEffect(() => {
    if (localStorage.length > 0) {
      setPositionX(JSON.parse(localStorage.getItem(0))[0]);
      setPositionY(JSON.parse(localStorage.getItem(0))[1]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(0, JSON.stringify([positionX, positionY]));
  }, [positionY, positionX]);

  const moveCharacter = (e) => {
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
  };

  const moveCharacterMemo = useMemo(
    () => moveCharacter,
    [positionX, positionY]
  );

  useEffect(() => {
    if (
      state.quests[0].x - 830 < positionX &&
      state.quests[0].x - 760 > positionX &&
      (state.quests[0].y - 525) * -1 > positionY &&
      (state.quests[0].y - 470) * -1 < positionY
    ) {
      setOver(0);
    } else {
      unsetOver(0);
    }
  }, [positionX, positionY]);

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
    setOver: (id) => {
      dispatch(setOver(id));
    },
    unsetOver: (id) => {
      dispatch(unsetOver(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
