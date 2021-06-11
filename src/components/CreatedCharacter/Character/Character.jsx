import React, { useEffect, useMemo, useState } from "react";
import head from "../../../pics/head.png";
import find from "../../../pics/searchicon.png";

import "./Character.scss";

const Character = () => {
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

  if (
    points.one.left - 830 < positionX &&
    points.one.left - 760 > positionX &&
    (points.one.top - 525) * -1 > positionY &&
    (points.one.top - 470) * -1 < positionY
  ) {
    console.log("Quest added");
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

export default Character;
