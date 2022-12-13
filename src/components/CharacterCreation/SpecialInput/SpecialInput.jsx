import React from "react";
import { statsArray } from "../../../constants/resourses/stats.jsx";
import SpecialItem from "./SpecialItem/SpecialItem.jsx";

import "./SpecialInput.scss";

const SpecialInput = ({ getStatPage, setHoveredStat }) => {
  return (
    <article className="special-input">
      <ul className="special-input__list">
        {statsArray.map((stat, index) => (
          <SpecialItem
            setHoveredStat={setHoveredStat}
            key={index}
            stat={stat}
            index={index}
            getStatPage={getStatPage}
          />
        ))}
      </ul>
    </article>
  );
};

export default SpecialInput;
