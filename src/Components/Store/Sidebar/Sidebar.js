import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'sidebar',
    initialState: {
        isActive : false
    },
    reducers:  {
        closeSidebar: state =>{
            state.isActive = false;
        },
        activeSidebar: state =>{
            state.isActive = true;
        }
    }
});
export const { closeSidebar, activeSidebar } = slice.actions;

export default slice.reducer;
