import {combineReducers} from "redux";
import { personReducer } from "./personReducer";

export default combineReducers({
    personReducer:personReducer
})