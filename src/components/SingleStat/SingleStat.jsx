import React from "react";
import "./SingleStat.css";
import { Link } from "react-router-dom";
import { description, statsArray } from "../../constants/resourses/stats.jsx";

const SingleStat = (props) => {
  return (
    <section className="description-flexbox">
      <nav>
        <Link to="/" className="link-home">
          GO BACK
        </Link>
      </nav>
      <div className="description">
        <img src={description[props.id].picture} />
        <p>{description[props.id].stat}</p>
        <article className="change-stat">
          <button
            onClick={() => {
              props.decrement(statsArray[props.id].toLocaleLowerCase());
            }}
          >
            -
          </button>
          <div className="points">
            {props.stats[statsArray[props.id].toLocaleLowerCase()]}
          </div>
          <button
            onClick={() => {
              props.increment(statsArray[props.id].toLocaleLowerCase());
            }}
          >
            +
          </button>
        </article>
      </div>
    </section>
  );
};

export default SingleStat;
