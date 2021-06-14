const DECREMENT = "DECREMENT";

const decrementStat = (statName) => {
  return {
    type: DECREMENT,
    payload: statName,
  };
};

export default decrementStat;
