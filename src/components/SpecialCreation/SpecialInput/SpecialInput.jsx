import React from "react";
import "./SpecialInput.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

const SpecialInput = (props) => {
  return (
    <article className="specialInput">
      <ul className="specialInput-list">
        <li>
          <button
            onClick={() => {
              props.decrement("strength");
            }}
          >
            -
          </button>
          <Link
            to="/strength"
            onClick={() => {
              props.getStatPage(0);
            }}
            className="stat-link"
          >
            STRENGTH
          </Link>
          <button
            onClick={() => {
              props.increment("strength");
            }}
          >
            +
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.decrement("perception");
            }}
          >
            -
          </button>

          <Link
            to="/perception"
            onClick={() => {
              props.getStatPage(1);
            }}
            className="stat-link"
          >
            PERCEPTION
          </Link>
          <button
            onClick={() => {
              props.increment("perception");
            }}
          >
            +
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.decrement("endurance");
            }}
          >
            -
          </button>

          <Link
            to="/perception"
            onClick={() => {
              props.getStatPage(2);
            }}
            className="stat-link"
          >
            ENDURANCE
          </Link>
          <button
            onClick={() => {
              props.increment("endurance");
            }}
          >
            +
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.decrement("charisma");
            }}
          >
            -
          </button>

          <Link
            to="/perception"
            onClick={() => {
              props.getStatPage(3);
            }}
            className="stat-link"
          >
            CHARISMA
          </Link>
          <button
            onClick={() => {
              props.increment("charisma");
            }}
          >
            +
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.decrement("intelligence");
            }}
          >
            -
          </button>

          <Link
            to="/perception"
            onClick={() => {
              props.getStatPage(4);
            }}
            className="stat-link"
          >
            INTELLIGENCE
          </Link>
          <button
            onClick={() => {
              props.increment("intelligence");
            }}
          >
            +
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.decrement("agility");
            }}
          >
            -
          </button>

          <Link
            to="/perception"
            onClick={() => {
              props.getStatPage(5);
            }}
            className="stat-link"
          >
            AGILITY
          </Link>
          <button
            onClick={() => {
              props.increment("agility");
            }}
          >
            +
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.decrement("luck");
            }}
          >
            -
          </button>

          <Link
            to="/perception"
            onClick={() => {
              props.getStatPage(6);
            }}
            className="stat-link"
          >
            LUCK
          </Link>
          <button
            onClick={() => {
              props.increment("luck");
            }}
          >
            +
          </button>
        </li>
      </ul>
      <button className="save-character-button" onClick={props.saveStats}>
        SAVE CHARACTER
      </button>
    </article>
  );
};

export default SpecialInput;
