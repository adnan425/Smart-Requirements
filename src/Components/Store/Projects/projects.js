 import { createSlice } from "@reduxjs/toolkit";
 
let lastId = 0;

const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        projectAdded : (projects, action)=>{
            projects.push(              {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        projectUpdated: (projects, action)=>{
            const index = projects.findIndex(bug => bug.id === action.payload.id);
            projects[index].resolved = true;
        }
    }
});
export const { projectAdded , projectUpdated } = slice.actions;
export default slice.reducer;

export const selectedProject = state =>{
    // state.projects.filter(project => project.id )
}
 