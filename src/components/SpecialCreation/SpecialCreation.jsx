import React from "react";
import SpecialInput from "./SpecialInput/SpecialInput.jsx";
import SpecialOutputConnected from "../../containers/showStatsContainer.jsx";
import pic from "../../pics/vaultboy.png";

const SpecialCreation = ({ getStatPage }) => {
  return (
    <div className="falloutSpecial">
      <img className="vaultboyImage" src={pic} />
      <SpecialInput getStatPage={getStatPage} />
      <SpecialOutputConnected />
    </div>
  );
};

export default SpecialCreation;
