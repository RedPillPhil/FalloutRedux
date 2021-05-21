const initialState = {
  strength: 5,
  perception: 5,
  endurance: 5,
  charisma: 5,
  intelligence: 5,
  agility: 5,
  luck: 5,
  remainingPoints: 5,
};

const changeStat = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
        remainingPoints: state.remainingPoints - 1,
      };
    case "DECREMENT":
      return {
        ...state,
        [action.payload]: state[action.payload] - 1,
        remainingPoints: state.remainingPoints + 1,
      };
    default:
      return state;
  }
};

export default changeStat;
