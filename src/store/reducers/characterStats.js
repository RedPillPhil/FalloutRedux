const initialState = {
  characterName: "",
  strength: 5,
  perception: 5,
  endurance: 5,
  charisma: 5,
  intelligence: 5,
  agility: 5,
  luck: 5,
  remainingPoints: 5,
  quests: [{ x: 910, y: 730 }],
  isOver: false,
  injuries: "None",
  inventory: {
    stimpack: 2,
    mm5: 200,
  },
};

const characterStats = (state = initialState, action) => {
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
      return {
        ...state,
        characterName: action.payload,
      };
    case "SET_OVER":
      return { ...state, isOver: true };
    case "UNSET_OVER":
      return {
        ...state,
        isOver: false,
      };

    case "LOAD_GAME":
      if (localStorage.getItem("stats") !== null) {
        const localStats = JSON.parse(localStorage.getItem("stats"));
        return {
          ...state,
          strength: localStats.strength,
          perception: localStats.perception,
          endurance: localStats.endurance,
          charisma: localStats.charisma,
          intelligence: localStats.intelligence,
          agility: localStats.agility,
          luck: localStats.luck,
        };
      } else {
        return {
          ...state,
        };
      }
    case "GET_LOOT":
      if (state.inventory.hasOwnProperty(action.id)) {
        let summedAmount = state.inventory[action.id] + action.amount;
        console.log(state.inventory);
        console.log(summedAmount);
        return {
          ...state,
          inventory: {
            ...state.inventory,
            [action.id]: summedAmount,
          },
        };
      }
    default:
      return state;
  }
};

export default characterStats;
