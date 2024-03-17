import {createSlice} from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState={
    assignments:assignments,
    assignment:{
        _id:'A000',
        title:"New Assignment",
        course:"ABC",
        dueDate: "2024-10-02",
        totalPoints: 100,
        notAvailableBefore: null
    }
};

const assignmentSlice= createSlice({
    name:"assignments",
    initialState,
    reducers:{
        addAssignment:(state,action)=>{
            state.assignments= [
                {
                    ...action.payload,
                    _id:new Date().getTime().toString()
                },
                ...state.assignments
            ];
        },
        deleteAssignment: (state,action)=>{
            state.assignments=state.assignments.filter(
                assignment => assignment._id!== action.payload
            );
        },
        updateAssignments: (state,action)=>{
            state.assignments=state.assignments.map(assignment => {
                if(assignment._id === action.payload._id){
                    return action.payload;
                }
                else{
                    return assignment;
                }
            });
        },
        setAssignment:(state, action) =>{
            state.assignment=action.payload;
        }
    }
});

export const {addAssignment, deleteAssignment, updateAssignments, setAssignment}=assignmentSlice.actions;
export default assignmentSlice.reducer;