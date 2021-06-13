const initialState = {
  strength: 5,
  perception: 5,
  endurance: 5,
  charisma: 5,
  intelligence: 5,
  agility: 5,
  luck: 5,
  remainingPoints: 5,
  quests: [{ x: 910, y: 730, isTaken: false }],
};

const changeStat = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state.remainingPoints == 0 || state[action.payload] == 10) {
        return state;
      }
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
        remainingPoints: state.remainingPoints - 1,
      };
    case "DECREMENT":
      if (state[action.payload] == 1) {
        return state;
      }
      return {
        ...state,
        [action.payload]: state[action.payload] - 1,
        remainingPoints: state.remainingPoints + 1,
      };
    case "SAVE_CHARACTER":
      if (state.remainingPoints == 0) {
        return state;
      }
    case "GET_QUEST":
      return {
        ...state,
        quests: [
          ...state.quests,
          state.quests.filter((quest, index) => {
            if (index === action.payload) {
              return (quest.isTaken = true);
            }
          }),
        ],
      };

    default:
      return state;
  }
};

export default changeStat;
