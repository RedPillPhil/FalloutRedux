import React from "react";
import "./SpecialInput.css";

const SpecialInput = (props) => {
  console.log(props);
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
          <div>STRENGTH</div>
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
          <div>PERCEPTION</div>
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
          <div>ENDURANCE</div>
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
          <div>CHARISMA</div>
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
          <div>INTELLIGENCE</div>
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
          <div>AGILITY</div>
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
          <div>LUCK</div>
          <button
            onClick={() => {
              props.increment("luck");
            }}
          >
            +
          </button>
        </li>
      </ul>
    </article>
  );
};

export default SpecialInput;
