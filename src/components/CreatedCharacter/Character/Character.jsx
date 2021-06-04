import React from "react";
import travelerPicture from "../../../pics/traveler.png";

import "./Character.scss";

const Character = () => {
  return (
    <main className="your-character">
      {<img src={travelerPicture} />}
      You're a traveler. You don't know anything about bad businesses and just
      enjoying the Wastelands
    </main>
  );
};

export default Character;
