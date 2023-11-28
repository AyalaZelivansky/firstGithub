import { combineReducers } from "redux";
import reducer from "./student";

const reducers = combineReducers({
    user:reducer
})

export default reducers