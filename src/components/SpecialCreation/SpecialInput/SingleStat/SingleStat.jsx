import React from "react";
import "./SingleStat.css";
import strengthPicture from "../../../../pics/strength.png";
import perceptionPicture from "../../../../pics/perception.png";

const description = [
  {
    stat: "Strength allows you to hold more items in your inventory and increases your melee damage",
    picture: strengthPicture,
  },
  {
    stat: "The better your perception, the quicker you'll spot enemies on the compass",
    picture: perceptionPicture,
  },
  {
    stat: "Endurance increases max health, and your resistance to poison and radiation",
  },
  { stat: "Charisma makes talking to people much easier" },
  {
    stat: "Intelligence increases the amount of Skills Points you are allowed to give your skills when you gain a Level",
  },
  { stat: "Agility increases your APS in VATS combat mode" },
  { stat: "Luck increases your critical hit rate, plus increases all skills" },
];

const SingleStat = (props) => {
  console.log(props);
  console.log(description[props.id]);
  return (
    <div className="description">
      <img src={description[props.id].picture} />
      <p>{description[props.id].stat}</p>
    </div>
  );
};

export default SingleStat;
