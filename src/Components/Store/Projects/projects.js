import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../Services/httpService";

const apiUrl = "http://localhost:3004/api";
export const addProject = createAsyncThunk("projects/addProject", async ({data})=>{
    try {
        const response = await http.post(`${apiUrl}/projects`,data);
        return await response.data;
    } catch (error) {
        return error.message
    }
});
export const getMyProjects = createAsyncThunk("projects/getProjects", async () => {
    try {
        const response = await http.get(`${apiUrl}/projects/me`);
        return await response.data;
    } catch (error) {
        return error.message
    }
});
export const getProjectById = createAsyncThunk("projects/getProjectById", async (id) => { 
    try {
        const response = await http.get(`${apiUrl}/projects/${id}`);
        return await response.data;
    } catch (error) {
        return error.message
    }
});

var lastId;
const slice = createSlice({
    name: 'projects',
    initialState: {
        list: [],
        selectedProject: {},
        loading: false,
        lastFetch: null,
        error: {}
    },
    extraReducers: {
        [getMyProjects.pending]: (state, action) => {
            state.loading = true;
        },
        [getMyProjects.fulfilled]: (projects, action) => {
            projects.loading = false;
            if(action.type !== "error")
                projects.list = action.payload; 

        },
        [getMyProjects.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [getProjectById.pending]: (state, action) => {
            state.loading = true;
        },
        [getProjectById.fulfilled]: (state, action) => {
            state.loading = false;
            if(action.type !== "error")
                state.selectedProject = action.payload;
        },
        [getProjectById.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;

        },
        [addProject.pending]: (state, action) => {
            state.loading = true;
        },
        [addProject.fulfilled]: (state, action) => {
            state.loading = false;
            if(action.type !== "error")
                state.list = [...state.projects.list , action.payload];
        },
        [addProject.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;

        },
        projectsRecived: (projects, action) => {
            projects.list = action.payload.data;
        },
        projectAdded: (projects, action) => {
            projects.list.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        projectUpdated: (projects, action) => {
            const index = projects.list.findIndex(bug => bug.id === action.payload.id);
            projects[index].resolved = true;
        }
    }
});
export const { projectsRecived, projectAdded, projectUpdated } = slice.actions;
export default slice.reducer;

// export const selectedProject = state => {
//     // state.projects.filter(project => project.id )
// }

// ACTIONS CREATERS
// export const loadProjects = ()=> apiCallBegin({
//     url: 'projects',
//     onSuccess: slice.actions.projectsRecived.type,
//     onError: 'apiCallFailed'
//  })
