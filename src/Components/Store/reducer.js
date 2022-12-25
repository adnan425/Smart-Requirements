import { combineReducers } from "@reduxjs/toolkit";
import projectsReducers from './Projects/projects';
import sidebarReducers from './Sidebar/Sidebar';
import srsReducers from "./SRS/srs";
const reducers =  combineReducers({
    projects: projectsReducers,
    sidebar: sidebarReducers,
    srs: srsReducers
})
export default reducers;
