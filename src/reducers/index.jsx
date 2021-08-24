import { combineReducers } from "redux";
import employees from "./employees";
import { reducer as formReducer } from "redux-form";

export default combineReducers({ employees, form: formReducer });
