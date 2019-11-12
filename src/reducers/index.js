import { combineReducers } from "redux";
import employees from "./employees_reducer";

export const rootReducer = combineReducers({
    employees: employees
});

