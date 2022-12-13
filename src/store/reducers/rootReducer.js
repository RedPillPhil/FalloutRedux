import { combineReducers } from "redux";
import characterStats from "./characterStats";

const rootReducer = combineReducers({
  characterStats,
});

export default rootReducer;
