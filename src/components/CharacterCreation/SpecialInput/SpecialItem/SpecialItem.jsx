import React from "react";
import { useDispatch } from "react-redux";
import incrementStat from "../../../../store/actions/incrementAction";
import decrementStat from "../../../../store/actions/decrementAction";

import "./SpecialItem.scss";

const SpecialItem = ({ stat, setHoveredStat }) => {
  const dispatch = useDispatch();

  const incrementCharacterStat = (id) => {
    dispatch(incrementStat(id));
  };

  const decrementCharacterStat = (id) => {
    dispatch(decrementStat(id));
  };

  return (
    <li
      className="special-item"
      onMouseEnter={() => {
        setHoveredStat(stat);
      }}
    >
      <button
        className="special-item__button"
        onClick={() => {
          decrementCharacterStat(stat.toLocaleLowerCase());
        }}
      >
        -
      </button>
      <span className="special-item__name">{stat}</span>
      <button
        className="special-item__button"
        onClick={() => {
          incrementCharacterStat(stat.toLocaleLowerCase());
        }}
      >
        +
      </button>
    </li>
  );
};

export default SpecialItem;
