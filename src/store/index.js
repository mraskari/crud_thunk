import { applyMiddleware, combineReducers, createStore } from "redux";
import { postsListReducer, expandedAccardion } from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
  postsReducersKey: postsListReducer,
  expandedAccardionKey: expandedAccardion,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
