import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import { Assignment } from "../../types";

export interface KanbasState{
    modulesReducer: {
        modules: any[];
        module: any;
    };
    assignmentsReducer:{
        assignments: Assignment[];
        assignment: Assignment;
    };
}

const store = configureStore({
    reducer:{
        modulesReducer,
        assignmentsReducer,
    }
});

export default store;