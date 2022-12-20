import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import http from "../../Services/httpService";

const apiUrl = "http://localhost:3004/api";
export const projectRequirements = createAsyncThunk("projects/requirements", async (id) => {
    try {
        const response = await http.get(`${apiUrl}/manager/requirement/${id}`);
        console.log(response.data);
        return await response.data;
    } catch (error) {
        toast.error(error.message);
        return error.message
    }
})
export const getProjectStakeholders = createAsyncThunk("projects/stakeholders", async (id) => {
    try {
        const response = await http.get(`${apiUrl}/manager/stakeholders/${id}`);
        return await response.data;
    } catch (error) {
        return error.message
    }
})
export const addProject = createAsyncThunk("projects/addProject", async ({ data }) => {
    try {
        const response = await http.post(`${apiUrl}/projects`, data);
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

const slice = createSlice({
    name: 'projects',
    initialState: {
        list: [],
        selectedProject: {},
        stakeholders: [],
        requirements: [],
        loading: false,
        lastFetch: null,
        error: {}
    },
    extraReducers: {
        //  GET MY PROJECTS
        [getMyProjects.pending]: (state, action) => {
            state.loading = true;
        },
        [getMyProjects.fulfilled]: (projects, action) => {
            projects.loading = false;
            if (action.type !== "error")
                projects.list = action.payload;

        },
        [getMyProjects.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // GET PROJECTS BY ID
        [getProjectById.pending]: (state, action) => {
            state.loading = true;
        },
        [getProjectById.fulfilled]: (state, action) => {
            state.loading = false;
            if (action.type !== "error")
                state.selectedProject = action.payload;
        },
        [getProjectById.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;

        },
        // ADD PROJECT
        [addProject.pending]: (state, action) => {
            state.loading = true;
        },
        [addProject.fulfilled]: (state, action) => {
            state.loading = false;
            if (action.type !== "error")
                state.list = [...state.projects.list, action.payload];
        },
        [addProject.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;

        },
        //  GET MY PROJECTS STAKEHOLDERS
        [getProjectStakeholders.pending]: (state, action) => {
            state.loading = true;
        },
        [getProjectStakeholders.fulfilled]: (state, action) => {
            state.loading = false;
            if (action.type !== "error")
                state.staholders = [...state.projects.stakeholders, action.payload];
        },
        [getProjectStakeholders.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;

        },
        //  GET MY PROJECTS REQUIREMMETNS
        [projectRequirements.pending]: (state, action) => {
            state.loading = true;
        },
        [projectRequirements.fulfilled]: (projects, action) => {
            projects.loading = false;
            if (action.type !== "error")
                projects.requirements = [...projects.requirements, action.payload];
        },
        [projectRequirements.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;

        },


    }
});
export const { projectsRecived, projectAdded, projectUpdated } = slice.actions;
export default slice.reducer;

