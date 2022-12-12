import { combineReducers } from "@reduxjs/toolkit";
import projectReducer from './Projects/projects';
const reducers =  combineReducers({
    projects: projectReducer
})
export default reducers;
