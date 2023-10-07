import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        nextTest(state, action) {
            state.answer =  action.payload 
        },
        rightTest(state, action){
            state.right = action.payload
        }
  
    },
});
export const testDisplay = displaySlice.actions;
export default displaySlice.reducer 