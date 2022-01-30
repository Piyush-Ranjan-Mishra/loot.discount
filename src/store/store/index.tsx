import { applyMiddleware, combineReducers, compose, createStore } from "redux";

const appReducer = combineReducers({});
const store = createStore(
  appReducer);


export default store;