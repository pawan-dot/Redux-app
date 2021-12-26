import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducers from "./Reducers";

export const store = createStore(Reducers, {}, applyMiddleware(thunk))//take all reducer,initial state and may be one middleware