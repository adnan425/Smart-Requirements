import { combineReducers } from "@reduxjs/toolkit";
import projectsReducers from './Projects/projects';
const reducers =  combineReducers({
    projects: projectsReducers
})
export default reducers;
