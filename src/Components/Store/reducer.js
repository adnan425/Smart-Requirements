import { combineReducers } from "@reduxjs/toolkit";
import projectsReducers from './Projects/projects';
import sidebarReducers from './Sidebar/Sidebar';
const reducers =  combineReducers({
    projects: projectsReducers,
    sidebar: sidebarReducers,
})
export default reducers;
