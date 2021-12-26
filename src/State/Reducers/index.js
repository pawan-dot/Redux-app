//combine all reducer at one place
import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
const reducers = combineReducers({
    amount: amountReducer//only one reduser preent if more reducer then separet  with comma
});
export default reducers;