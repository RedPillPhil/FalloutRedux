const initialState = {
  strength: 5,
  perception: 5,
  endurance: 5,
  charisma: 5,
  intelligence: 5,
  agility: 5,
  luck: 5,
};

const changeStat = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default changeStat;
