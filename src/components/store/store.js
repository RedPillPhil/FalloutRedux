import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
