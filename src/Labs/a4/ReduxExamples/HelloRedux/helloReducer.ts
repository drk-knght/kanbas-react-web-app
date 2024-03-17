import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    messaage: "Hello World",

};
const helloSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {},
});
export default helloSlice.reducer;