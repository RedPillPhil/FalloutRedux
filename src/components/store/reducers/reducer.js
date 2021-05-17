import initialState from "../initialState";

function reducer(state = initialState, action) {
  switch (action.type) {
    case COUNT:
      return { value: action.toReturn };
    default:
      return state;
  }
}

export default reducer;
