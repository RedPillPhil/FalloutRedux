import strengthPicture from "../../pics/strength.png";
import perceptionPicture from "../../pics/perception.png";
import endurancePicture from "../../pics/endurance.png";
import charismaPicture from "../../pics/charisma.png";
import intelligencePicture from "../../pics/intelligence.png";
import agilityPicture from "../../pics/agility.png";
import luckPicture from "../../pics/luck.png";

const statsArray = [
  "STRENGTH",
  "PERCEPTION",
  "ENDURANCE",
  "CHARISMA",
  "INTELLIGENCE",
  "AGILITY",
  "LUCK",
];

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
    picture: endurancePicture,
  },
  {
    stat: "Charisma makes talking to people much easier",
    picture: charismaPicture,
  },
  {
    stat: "Intelligence increases the amount of Skills Points you are allowed to give your skills when you gain a Level",
    picture: intelligencePicture,
  },
  {
    stat: "Agility increases your APS in VATS combat mode",
    picture: agilityPicture,
  },
  {
    stat: "Luck increases your critical hit rate, plus increases all skills",
    picture: luckPicture,
  },
];

export { statsArray, description };
