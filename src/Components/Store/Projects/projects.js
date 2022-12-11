 import { createSlice } from "@reduxjs/toolkit"; 
let lastId = 0;

const slice = createSlice({
    name: 'projects',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        projectsRecived :(projects,action)=>{
            projects.list = action.payload;
        },
        projectAdded : (projects, action)=>{
            projects.list.push(              {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        projectUpdated: (projects, action)=>{
            const index = projects.list.findIndex(bug => bug.id === action.payload.id);
            projects[index].resolved = true;
        }
    }
});
export const { projectAdded , projectUpdated } = slice.actions;
export default slice.reducer;

export const selectedProject = state =>{
    // state.projects.filter(project => project.id )
}

// ACTIONS CREATERS
// export const loadProjects = ()=> apiCallBegin({
//     url: 'projects', 
//     onSuccess: slice.actions.projectsRecived.type,
//     onError: 'apiCallFailed'
//  })
 