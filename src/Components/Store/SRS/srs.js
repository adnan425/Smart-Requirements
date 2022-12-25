import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import http from "../../Services/httpService";

const apiUrl = "http://localhost:3004/api";

export const getProjectTitle = createAsyncThunk('project/title', async (id) => {
    try {
        const response = await http.get(`${apiUrl}/projects/p/${id}`);
        return await response.data;
    } catch (error) {
        return error.message
    }
});
export const updateProjectTitle = createAsyncThunk('project/title', async (data) => {
    try {
        const projectId = useSelector((c) => c.projects.selectedProject._id);
        const response = await http.put(`${apiUrl}/projects/p/${projectId}`, data);
        return await response.data;
    } catch (error) {
        return error.message
    }
})

const slice = createSlice({
    name: 'srs',
    initialState: {
        title: {},
        error: {},
        loading: false,
    },
    extraReducers: {
        //  GET ALL PROJECTS
        [getProjectTitle.pending]: (state, action) => {
            state.loading = true;
        },
        [getProjectTitle.fulfilled]: (state, action) => {
            state.loading = false;
            if (action.type !== "error")
                state.title = action.payload;
        },
        [getProjectTitle.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

// export const { getProjectTitle  } = slice.actions;
export default slice.reducer;