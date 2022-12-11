 import configureStore from "../configureStore";
 import {projectAdded} from "./projects";

 const store = configureStore();
 store.subscribe(()=>{
    console.log("Store changed");
 });

 store.dispatch(projectAdded({"name": "test"}));
 console.log(store.getState());
 
 const getProjects = ()=>{
   store.dispatch({
      type: 'apiCallBegin',
      payload: {
         url: '/users/me',
         // method: 'POST'
         // data : {},
         onSuccess: 'ProjectsRecieved',
         onError: 'apiCallFailed'
      }
   })
 }

 export default getProjects;
