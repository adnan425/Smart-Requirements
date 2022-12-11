 import configureStore from "../configureStore"; 
 import { loadProjects } from "./projects";

 const store = configureStore();
 store.subscribe(()=>{
    console.log("Store changed");
 });
 
 console.log(store.getState());

 
 
