import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import baucuaReducer from "./slices/baucuaSlice";

const reducer = combineReducers({
  baucua: baucuaReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(thunk);

const store = createStore(
  reducer /* preloadedState, */,
  composeEnhancers(middlewares)
);
export default store;
