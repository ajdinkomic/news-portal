import { combineReducers } from "redux";
import homeReducer from "./home";
import searchReducer from "./search";

const allReducers = combineReducers({
    homeReducer,
    searchReducer
});

export default allReducers;