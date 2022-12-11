import { combineReducers } from "@reduxjs/toolkit";
import projectReducer from './Projects/projects';
export default combineReducers({
    projects: projectReducer
})