const INCREMENT = "INCREMENT";

const incrementStat = (statName) => {
  return {
    type: INCREMENT,
    payload: statName,
  };
};

export default incrementStat;
