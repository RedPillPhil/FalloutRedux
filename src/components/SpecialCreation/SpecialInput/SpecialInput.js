import React from "react";
import "./SpecialInput.css";

function SpecialInput() {
  return (
    <article className="specialInput">
      <ul className="specialInput-list">
        <li>
          <button>-</button>
          <div>STRENGTH</div>
          <button>+</button>
        </li>
        <li>
          <button>-</button>
          <div>PERCEPTION</div>
          <button>+</button>
        </li>
        <li>
          <button>-</button>
          <div>ENDURANCE</div>
          <button>+</button>
        </li>
        <li>
          <button>-</button>
          <div>CHARISMA</div>
          <button>+</button>
        </li>
        <li>
          <button>-</button>
          <div>INTELLIGENCE</div>
          <button>+</button>
        </li>
        <li>
          <button>-</button>
          <div>AGILITY</div>
          <button>+</button>
        </li>
        <li>
          <button>-</button>
          <div>LUCK</div>
          <button>+</button>
        </li>
      </ul>
    </article>
  );
}

export default SpecialInput;
