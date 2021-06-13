import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar.jsx";
import Character from "./Game/Game.jsx";

import "./CreatedCharacter.scss";

const CreatedCharacter = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let timeout = 0;
    if (percent < 100) {
      timeout = setTimeout(() => {
        setPercent((prevState) => prevState + Math.ceil(Math.random() * 30));
      }, Math.ceil(Math.random() * 100));
    } else {
      clearTimeout(timeout);
      setPercent(100);
    }
  }, [percent]);

  return (
    <main className="character">
      {percent === 100 ? <Character /> : <ProgressBar done={percent} />}
    </main>
  );
};

export default CreatedCharacter;
