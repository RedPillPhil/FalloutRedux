const DECREMENT = "DECREMENT";

const decrementStat = (statName) => {
  return {
    type: DECREMENT,
    payload: statName,
  };
};

export default decrementStat;

const ACTION_TYPES = {
DECREMENT: 'DECREMENT',
INCREMENT: 'INCREMENT'
}
