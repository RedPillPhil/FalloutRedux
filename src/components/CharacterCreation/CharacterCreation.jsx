import React, { useState } from "react";
import SpecialInput from "./SpecialInput/SpecialInput.jsx";
import SpecialOutput from "./SpecialOutput/SpecialOutput.jsx";
import SubmitCharacter from "./SubmitCharacter/SubmitCharacter.jsx";
import saveCharacter from "../../store/actions/saveCharacterAction";
import SingleStat from "./SingleStat/SingleStat.jsx";
import Input from "../Shared/Input/Input.jsx"
import { useSelector, useDispatch } from "react-redux";

import pic from "../../pics/vaultboy.png";

import "./CharacterCreation.scss";

const CharacterCreation = ({ getStatPage }) => {
  const [characterName, setCharacterName] = useState("");
  const [hoveredStat, setHoveredStat] = useState("strength");

  const characterStats = useSelector((state) => state.characterStats);
  const dispatch = useDispatch();

  const saveStats = (name) => {
    dispatch(saveCharacter(name));
  };

  const alertUnspentPointWarn = (remainingPoints) => {
    alert(`You have ${remainingPoints} unspent points!`);
  };

  const handleNameChange = (e) => {
    setCharacterName(e.target.value);
  };

  const saveName = () => {
    localStorage.setItem("name", characterName);
    localStorage.setItem(
      "stats",
      JSON.stringify({
        strength: characterStats.strength,
        perception: characterStats.perception,
        endurance: characterStats.endurance,
        charisma: characterStats.charisma,
        intelligence: characterStats.intelligence,
        agility: characterStats.agility,
        luck: characterStats.luck,
      })
    );
    saveStats(characterName);
  };

  return (
    <div className="character-creation">
      <div className="character-creation__left-side">
        <img className="character-creation__vaultboy" src={pic} />
        <div>
          <label className="character-creation__name">
            <span>CHARACTER NAME:</span>
            <Input text={characterName} updateText={handleNameChange} />
          </label>
          <div className="character-creation__output-wrapper">
            <SpecialInput
              getStatPage={getStatPage}
              saveName={saveName}
              setHoveredStat={setHoveredStat}
            />
            <SpecialOutput />
          </div>
          <div className="character-creation__remaining-points">
            Remaining points: {characterStats.remainingPoints}
          </div>
          <SubmitCharacter
            saveName={saveName}
            alertUnspentPointWarn={alertUnspentPointWarn}
          />
        </div>
      </div>
      <div className="character-creation__right-side">
        <SingleStat statName={hoveredStat.toLocaleLowerCase()} />
      </div>
    </div>
  );
};

export default CharacterCreation;
