import React from "react";
import { description } from "../../../constants/resourses/stats.jsx";

import "./SingleStat.scss";

const SingleStat = ({ statName }) => {
  return (
    <section className="single-stat">
      <div className="single-stat__description">
        <img
          className="single-stat__image"
          src={description[statName].picture}
        />
        <p>{description[statName].stat}</p>
      </div>
    </section>
  );
};

export default SingleStat;
