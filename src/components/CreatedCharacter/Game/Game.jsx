import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import getQuest from "../../../store/actions/getQuest.jsx";
import head from "../../../pics/head.png";
import find from "../../../pics/searchicon.png";

import "./Game.scss";

const Game = ({ state, getQuest }) => {
  console.log(state.quests[0]);
  const [positionX, setPositionX] = useState(130);
  const [positionY, setPositionY] = useState(-15);

  const [points, setPoints] = useState({
    one: {
      left: 910,
      top: 730,
    },
  });

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
      getQuest(0);
    }
  }, []);
  if (
    state.quests[0].x - 830 < positionX &&
    state.quests[0].x - 760 > positionX &&
    (state.quests[0].y - 525) * -1 > positionY &&
    (state.quests[0].y - 470) * -1 < positionY
  ) {
    getQuest(0);
  }
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
          left: points.one.left + positionX + "px",
          top: points.one.top + positionY + "px",
        }}
      />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.changeStat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuest: (id) => {
      dispatch(getQuest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
